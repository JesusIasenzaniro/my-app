import { useContext } from 'react';
import AppContext from '../../Context/Context';
import styles from './SortProduct.module.css';

const SortProduct = () => {
    const value = useContext(AppContext);

    return (
        <article className={styles.sortContainer}>
            <form>
                <label htmlFor='sort'>Sort by </label>
                <select
                    name='sort'
                    id='sort'
                    className='sortInput'
                    value={value?.sort}
                    onChange={(e) => value?.setSort(e.target.value)}
                >
                    <option value='all'>all</option>
                    <option value='price-lowest'>price (lowest)</option>
                    <option value='price-highest'>price (highest)</option>
                </select>
            </form>
        </article>
    );
};

export default SortProduct;
