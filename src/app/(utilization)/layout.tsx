import React from 'react';

import Text from "@/components/UI/Text/Text/Text";
import type {Metadata} from "next";
import {useRouter} from "next/navigation";

export const metadata: Metadata = {
    title: '"Инфотех" - сайт компании. Утилизация техники',
};
export default function AsideLayout({children}: Readonly<{ children: React.ReactNode }>) {

    return (
        <>
            {children}
        </>
    );
}
