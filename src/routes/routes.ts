import {UrlObject} from "url";

export type TRoute = { href: string | UrlObject, title: string }

export const routes: TRoute[] = [
    {href: "/", title: "Главная"},
    {href: "/about", title: "О компании"},
    {href: "/contacts", title: "Контакты"},
    {href: "/form", title: "Заявка на утилизацию"},
]

export const asideRoutes: TRoute[] = [
    {href: "/computers", title: "Утилизация компьютеров"},
    {href: "/printers", title: "Утилизация принтеров"},
    {href: "/phones", title: "Утилизация телефонов"},
    {href: "/accumulators", title: "Утилизация ИБП"},
    {href: "/monitors", title: "Утилизация мониторов"},
    {href: "/appliances", title: "Утилизация бытовой техники"},
    {href: "/televisions", title: "Утилизация телевизоров"},
    {href: "/medicals", title: "Утилизация медицинского оборудования"},
    {href: "/cartridges", title: "Утилизация картриджей"},
    {href: "/legal", title: "Нормативная база"},
]