'use client';
import AppContext from '../../Context/Context';
import { useState } from 'react';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sort, setSort] = useState('all');
    return (
        <main>
            <AppContext.Provider value={{ sort, setSort }}>
                <article>{children}</article>
            </AppContext.Provider>
        </main>
    );
}
