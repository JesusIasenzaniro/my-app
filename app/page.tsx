import React from 'react';
import styles from '../styles/Home.module.css';
import ProductList from './components/ProductList/ProductList';

export default function HomePage() {
    return (
        <main className={styles.main}>
            {/*@ts-ignore */}
            <ProductList />
        </main>
    );
}
