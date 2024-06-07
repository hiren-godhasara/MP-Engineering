import YandexMetricaScript from "@/component/Yandex";
import Head from "next/head";

const information = require('../../data/details.json')

export const metadata = {
    title: information?.shippingPolicy?.title,
    description: information?.shippingPolicy?.description,
    keywords: information?.shippingPolicy?.keywords,

    openGraph: {
        title: information?.shippingPolicy?.ogTitle,
        description: information?.shippingPolicy?.ogDescription,
        images: {
            url: information?.shippingPolicy?.ogImage,
            height: 340,
            width: 640,
        },
    },
};

export default function shippingPolicyLayout({
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
