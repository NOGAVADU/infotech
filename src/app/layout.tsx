import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import Header from "@/components/Header/Header";
import './nullstyle.css'
import './globals.scss'
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/Banner/Banner";
import Aside from "@/components/Aside/Aside";

const inter = Roboto({subsets: ["latin"], weight: ['300', '400', '500', '700']});

export const metadata: Metadata = {
    title: '"Инфотех" - сайт компании',
    description:
        "Инфотех - компания, которая занимается утилизацией компьютеров и оргтехники в Смоленске." +
        "Компания имеет все необходимые лицензии для утилизации оргтехники и компьютеров" +
        "Осуществляется утилизация оргтехники с выплатами. Принимаем заявки на утилизацию",

};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Header/>
        <Banner/>
        <div className='content container'>
            <Aside/>
            {children}
        </div>
        <Footer/>
        </body>
        </html>
    );
}
