import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
    return (
        <ul className={styles.header}>
            <Link href='/' className={styles.link} data-testid='link'>
                <li>Home</li>
            </Link>
        </ul>
    );
};

export default Header;
