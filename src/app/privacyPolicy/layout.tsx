import YandexMetricaScript from "@/component/Yandex";
import Head from "next/head";

const information = require('../../data/details.json')

export const metadata = {
    title: information?.privacyPolicy?.title,
    description: information?.privacyPolicy?.description,
    keywords: information?.privacyPolicy?.keywords,

    openGraph: {
        title: information?.privacyPolicy?.ogTitle,
        description: information?.privacyPolicy?.ogDescription,
        images: {
            url: information?.privacyPolicy?.ogImage,
            height: 340,
            width: 640,
        },
    },
};

export default function PrivacyPolicyLayout({
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
