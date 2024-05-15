import React from 'react';
import Title from "@/components/UI/Text/Title/Title";
import Subtitle from "@/components/UI/Text/Subtitle/Subtitle";
import Paragraph from "@/components/UI/Text/Paragraph/Paragraph";
import Text from "@/components/UI/Text/Text/Text";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Контакты - "Инфотех" Сайт компании. Утилизация компьютеров и оргтехники в Смоленске',
};

const Page = () => {
    return (
        <main>
            <Title>Контакты</Title>
            <Text>
                <Subtitle>«ИнфоТех» - утилизация оргтехники, компьютеров, переферии,
                    техническая экспертиза, возврат денежных средств за драгметаллы.</Subtitle>
                <Paragraph>Телефон: (4812) 21-85-37</Paragraph>
                <Paragraph>Почта: util-komp@yandex.ru</Paragraph>
                <Paragraph>Адрес: 214005, г.Cмоленск, ул.Свердлова, д.24</Paragraph>
            </Text>
            <Text>
                <Subtitle>Отмечено на карте:</Subtitle>
                <Paragraph>ООО &quot;ИнфоТех&quot; Офис</Paragraph>
                <Paragraph>ООО &quot;ИнфоТех&quot; Производство и склад</Paragraph>
            </Text>
        </main>
    );
};

export default Page;