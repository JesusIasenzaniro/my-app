import React from 'react';
import { ProductType } from '../../../typings';
import Image from 'next/image';
import styles from './ProductList.module.css';
import { notFound } from 'next/navigation';

const fecthProducts = async () => {
    const res = await fetch('https://course-api.com/react-store-products');
    const products: ProductType[] = await res.json();
    return products;
};

async function ProductList() {
    const products = await fecthProducts();

    if (!products) return notFound;

    return (
        <section className={styles.productContainer}>
            {products.map((product) => {
                return (
                    <article key={product.id}>
                        <Image
                            priority={true}
                            src={product.image}
                            alt={product.name}
                            width={150}
                            height={150}
                        />
                        <p>{product.name}</p>
                        <p>{product.price} €</p>
                        <section className={styles.btn}>
                            <button>AÑADIR</button>
                        </section>
                    </article>
                );
            })}
        </section>
    );
}

export default ProductList;
