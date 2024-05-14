import React, {FC} from 'react';
import styles from './Input.module.scss'

interface InputProps {
    title?: string,
    placeholder?: string,
    value: string,
    setValue: React.Dispatch<string>;
}

const Input: FC<InputProps> = ({title, placeholder, value, setValue}) => {
    return (
        <label className={styles.label}>
            {title}
            <input value={value} onChange={e => setValue(e.target.value)} className={styles.input}
                   placeholder={placeholder}/>
        </label>
    );
};

export default Input;