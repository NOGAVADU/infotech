import React from 'react';
import type {Metadata} from "next";
import Title from "@/components/UI/Text/Title/Title";
import Text from "@/components/UI/Text/Text/Text";
import Paragraph from "@/components/UI/Text/Paragraph/Paragraph";
import List from "@/components/UI/Text/List/List";
import ListItem from "@/components/UI/Text/List/ListItem";
import Subtitle from "@/components/UI/Text/Subtitle/Subtitle";
import ImagePreview from "@/components/ImagePreview/ImagePreview";
import licence1 from '../../../public/licenziya1.jpg';
import licence2 from '../../../public/licenziya2.jpg';
import licence3 from '../../../public/licenziya3.jpg';
import certificate1 from '../../../public/certificate1.jpg';
import certificate2 from '../../../public/certificate2.jpg';
import record from '../../../public/record.jpg';
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import LicenceGallery from "@/components/LicenceGallery/LicenceGallery";

export const metadata: Metadata = {
    title: 'О компании - "Инфотех" Сайт компании. Утилизация компьютеров и оргтехники в Смоленске',
    description:
        "Инфотех - компания, которая занимается утилизацией компьютеров и оргтехники в Смоленске. О компании" +
        "Компания имеет все необходимые лицензии для утилизации оргтехники и компьютеров" +
        "Осуществляется утилизация оргтехники с выплатами",
};
const Page = () => {
    return (
        <main>
            <Title>О компании</Title>
            <Text>
                <Subtitle>«ИнфоТех» - утилизация оргтехники, компьютеров, переферии,
                    техническая экспертиза, возврат денежных средств за драгметаллы.</Subtitle>
                <Paragraph>Основными видами деятельности компании «ИнфоТех» являются:</Paragraph>
                <List>
                    <ListItem>Утилизация компьютеров в Смоленске, утилизация оргтехники в Смоленске с извлечением
                        драгоценных металлов в полном соответствии с законодательством РФ</ListItem>
                    <ListItem>Проведение технической экспертизы в Смоленске оборудования, компьютеров, оргтехники,
                        радио- и
                        телефонного оборудования, бытовой техники с предоставлением заключения (акт экспертизы
                        технического
                        состояния) с рекомендациями о возможности дальнейшего использования этого оборудования или с
                        предложением о целесообразности его списания и утилизации.</ListItem>
                </List>
                <Paragraph>На ведение данного вида деятельности ООО «ИнфоТех» имеет все необходимые лицензии и
                    разрешения:</Paragraph>
            </Text>
            <Text>
                <Subtitle>УТИЛИЗАЦИЯ ОРГТЕХНИКИ в Смоленске:</Subtitle>
                <List>
                    <ListItem>Лицензия на деятельность по сбору, использованию, обезвреживанию, транспортировке и
                        размещению отходов 1-4 класса опасности №ОП-48-001618(59) от 22 апреля 2010 года.</ListItem>
                </List>
                <Paragraph> <b>ВНИМАНИЕ!</b> Передача оргтехники на утилизацию организации как без лицензии на
                    обращение с
                    опасными отходами, так и в лицензии которой не указан вид отхода (офисная техника, трубки мониторов
                    и др.) НЕЗАКОННА!</Paragraph>
                <List>
                    <ListItem>Свидетельство о постановке на Специальный учет № 0150002830, выданного Смоленской
                        Государственной Инспекцией пробирного надзора «06» мая 2010 г.</ListItem>
                </List>
                <Paragraph><b>ВНИМАНИЕ!</b> Передача оргтехники на утилизацию организации не состоящей на
                    специальном учёте в Государственной Инспекции пробирного надзора НЕЗАКОННА!</Paragraph>
                <List>
                    <ListItem>Сертификат соответствия №РОСС RU.У273.М04451 на ремонт и техническое обслуживание,
                        установку: радиоэлектронной аппаратуры, электрических машин и приборов, в т.ч. услуги по
                        проведению технической экспертизы работоспособности оборудования информационных технологий,
                        ПЭВМ, электрических машин и приборов.
                    </ListItem>
                </List>
            </Text>
            <LicenceGallery/>
        </main>
    );
};

export default Page;