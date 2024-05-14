import React from 'react';
import Title from "@/components/UI/Text/Title/Title";
import UtilForm from "@/components/UtilForm/UtilForm";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Заявка на утилизацию - "Инфотех" Сайт компании. Утилизация компьютеров и оргтехники в Смоленске',
};

const Page = () => {
    return (
        <main>
            <Title>Заявка на утилизацию</Title>
            <UtilForm/>
        </main>
    );
};

export default Page;