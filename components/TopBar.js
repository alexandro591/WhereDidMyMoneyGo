import styles from '../styles/modules/TopBar.module.scss';

export default function TopBar(props) {
    const { setShowAddItemModal, total } = props;
    return (
        <div className={styles.main}>
            <div className={styles.total}>
                <span className={styles.total}>
                    Total:{' '}
                    <span className={total > 0 ? styles.green : styles.red}>
                        ${total}
                    </span>
                </span>
            </div>
            <img
                src='/plus.svg'
                onClick={() => setShowAddItemModal(true)}
            ></img>
        </div>
    );
}
