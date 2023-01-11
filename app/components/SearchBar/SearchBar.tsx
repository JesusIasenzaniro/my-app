'use client';
import { FormEvent, useState } from 'react';
import styles from './SearchBar.module.css';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
    const [searchParam, setSearchParam] = useState('');
    const router = useRouter();
    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearchParam('');
        router.push(`/search/${searchParam}`);
    };
    return (
        <form onSubmit={handleSearch} className={styles.SearchBar}>
            <input
                type='text'
                placeholder='Buscar'
                onChange={(e) => setSearchParam(e.target.value)}
                value={searchParam}
            />
        </form>
    );
};

export default SearchBar;
