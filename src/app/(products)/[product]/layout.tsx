import Head from 'next/head';
import React from 'react';


type Props = {
    params: {
        product: any; id: string
    }
}

export default function ProductLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
        </div>
    );
}
