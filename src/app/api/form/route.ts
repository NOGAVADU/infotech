import {NextResponse} from "next/server";
// @ts-ignore
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const transporter = nodemailer.createTransport(
        {
            host: 'smtp.mail.ru',
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS

            }
        },
        {
            from: process.env.MAIL_USER,
        }
    );

    const mailer = (message) => {
        transporter.sendMail(message, (err, info) => {
            if (err) return console.log(err)
            console.log("Email sent: ", info)
        })
    }

    const body = await req.json();
    const message = {
        to: process.env.MAIL_TO,
        subject: 'Заявка с сайта',
        text: `Название компании: ${body.companyName}, почта: ${body.email}, тело: ${body.message}`
    }
    console.log('work')
    mailer(message)

    return NextResponse.json({body})
}