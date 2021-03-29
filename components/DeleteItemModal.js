import { useContext } from 'react';
import { Button } from '../shared/material';
import styles from '../styles/modules/DeleteItemModal.module.scss';
import { ItemsContext } from '../context/ItemsContext';

export default function AddItemModal(props) {
    const { onClose: setShowDeleteModal, item } = props;
    const { setItems } = useContext(ItemsContext);

    return (
        <div className={styles.main}>
            <form>
                <div className={styles.title}>
                    <h3>Do you want to delete this item?</h3>
                </div>
                <div className={styles.buttonsContainer}>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={() => {
                            setShowDeleteModal(false);
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={() => {
                            setItems((items) => {
                                const _items = [...items];
                                _items.forEach((_item, index) => {
                                    if (_item.id === item.id) {
                                        _items.splice(index, 1);
                                    }
                                });
                                return _items.sort(
                                    (a, b) =>
                                        new Date(b.date) - new Date(a.date)
                                );
                            });
                            setShowDeleteModal(false);
                        }}
                    >
                        Delete
                    </Button>
                </div>
            </form>
        </div>
    );
}
