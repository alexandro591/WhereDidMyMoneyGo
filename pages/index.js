import Head from 'next/head';
import styles from '../styles/modules/App.module.scss';
import Item from '../components/Item';
import AddItemModal from '../components/AddItemModal';
import TopBar from '../components/TopBar';
import { useContext, useEffect, useState } from 'react';
import { ItemsContext } from '../context/ItemsContext';

export default function App() {
    const [showAddItemModal, setShowAddItemModal] = useState(false);
    const { items, setItems } = useContext(ItemsContext);

    useEffect(() => {
        const _items = localStorage.getItem('items');
        _items ? setItems(JSON.parse(_items)) : '';
    }, []);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    const getTotalBalance = () => {
        let total = 0;
        items.forEach((item) => {
            total += item.amount;
        });
        return total;
    };
    return (
        <div className={styles.main}>
            <meta name='theme-color' content='#ff6600' />
            <Head>
                <title>WhereDidMyMoneyGo</title>
                <link rel='icon' href='/income.svg' />
            </Head>

            <TopBar
                setShowAddItemModal={setShowAddItemModal}
                total={getTotalBalance()}
            ></TopBar>

            {showAddItemModal ? (
                <AddItemModal
                    onClose={setShowAddItemModal}
                    setItems={setItems}
                ></AddItemModal>
            ) : (
                <></>
            )}

            <main className={styles.main}>
                {items.map((item) => {
                    return (
                        <Item
                            key={item.id}
                            item={item}
                            setItems={setItems}
                        ></Item>
                    );
                })}
            </main>
        </div>
    );
}
