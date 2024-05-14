"use client"

import React, {FormEvent, useState} from 'react';
import styles from './UtilForm.module.scss'

const UtilForm = () => {
    const [isSent, setIsSent] = useState(true)
    const [data, setData] = useState(
        {companyName: '', name: '', phone: '', email: '', message: ''})

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        fetch(`/api/form`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                companyName: data.companyName,
                name: data.name,
                phone: data.phone,
                email: data.email,
                message: data.message,
            })
        })
            .then(r => r.json())
            .then(d => {
                if (d?.ok) {
                    console.log(d)
                    setIsSent(true)
                }
            })
            .catch(e => console.log(e.message))
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
                Название организации:
                <input className={styles.input}
                       placeholder={'ООО "ИнфоТех"'}
                       value={data.companyName}
                       onChange={e => setData({...data, companyName: e.target.value})}
                />
            </label>
            <label className={styles.label}>
                Контактное лицо:
                <input className={styles.input}
                       placeholder={'Иванов Иван'}
                       value={data.name}
                       onChange={e => setData({...data, name: e.target.value})}
                />
            </label>
            <label className={styles.label}>
                Телефон:
                <input className={styles.input}
                       type={"tel"}
                       placeholder={'+7(654)3210'}
                       value={data.phone}
                       onChange={e => setData({...data, phone: e.target.value})}
                />
            </label>
            <label className={styles.label}>
                Почта:
                <input className={styles.input}
                       type={"email"}
                       required
                       placeholder={'example@yandex.ru'}
                       value={data.email}
                       onChange={e => setData({...data, email: e.target.value})}
                />
            </label>
            <label className={styles.label}>
                Тело запроса:
                <textarea className={styles.textarea}
                          required
                          value={data.message}
                          onChange={e => setData({...data, message: e.target.value})}
                />
            </label>
            <button type={"submit"} className={styles.submit}>Отправить</button>
        </form>
    );
};

export default UtilForm;