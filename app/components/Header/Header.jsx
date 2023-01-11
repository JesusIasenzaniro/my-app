import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
    return (
        <header className={styles.header}>
            <ul>
                <Link href='/' className={styles.link}>
                    <li>Home</li>
                </Link>
            </ul>
        </header>
    );
};

export default Header;
