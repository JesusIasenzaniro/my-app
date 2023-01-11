'use client';
import { useContext } from 'react';
import AppContext from '../../Context/Context';
import { ProductType } from '../../../typings';
import styles from './SearchResults.module.css';
import Image from 'next/image';
import useSWR from 'swr';
import SortProduct from '../../components/SortProduct/SortProduct';

type PageProps = {
    params: {
        searchTerm: string;
    };
};

function SearchResults({ params: { searchTerm } }: PageProps) {
    const value = useContext(AppContext);
    console.log('value', value?.sort);
    const fetcher = (args: any) => fetch(args).then((res) => res.json());
    const { data, error, isLoading } = useSWR(
        'https://course-api.com/react-store-products',
        fetcher
    );

    if (isLoading) return;
    if (error) throw new Error('Something went wrong');
    let tempProducts = [...data];
    if (searchTerm) {
        tempProducts = tempProducts.filter((product) => {
            return product.name.startsWith(searchTerm.toLowerCase());
        });

        if (value?.sort === 'price-lowest') {
            tempProducts = tempProducts.sort((a, b) => a.price - b.price);
        }
        if (value?.sort === 'price-highest') {
            tempProducts = tempProducts.sort((a, b) => b.price - a.price);
        }
    }

    return (
        <main>
            <SortProduct />
            <section className={styles.productContainer}>
                {tempProducts.length === 0 ? (
                    <h3>There is no product that match that criteria</h3>
                ) : (
                    tempProducts.map((product: ProductType) => {
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
                    })
                )}
            </section>
        </main>
    );
}

export default SearchResults;
