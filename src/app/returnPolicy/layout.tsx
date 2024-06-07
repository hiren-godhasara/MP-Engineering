import YandexMetricaScript from "@/component/Yandex";
import Head from "next/head";

const information = require('../../data/details.json')

export const metadata = {
    title: information?.returnPolicy?.title,
    description: information?.returnPolicy?.description,
    keywords: information?.returnPolicy?.keywords,

    openGraph: {
        title: information?.returnPolicy?.ogTitle,
        description: information?.returnPolicy?.ogDescription,
        images: {
            url: information?.returnPolicy?.ogImage,
            height: 340,
            width: 640,
        },
    },
};

export default function returnPolicyLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Head>
                <YandexMetricaScript />
            </Head>
            {children}
        </>
    );
}
