import { useContext, useState } from 'react';
import dateToStringFormatter from '../functions/dateToStringFormatter';
import normalizeString from '../functions/normalizeString';
import { TextField, Button } from '../shared/material';
import styles from '../styles/modules/EditItemModal.module.scss';
import { ItemsContext } from '../context/ItemsContext';

export default function AddItemModal(props) {
    const { onClose: setShowEditItemModal, item } = props;
    const { setItems } = useContext(ItemsContext);
    const [name, setName] = useState(item.name);
    const [amount, setAmount] = useState(item.amount);
    const [description, setDescription] = useState(item.description);
    const [date, setDate] = useState(item.date);

    const clearInputs = () => {
        setName('');
        setAmount('');
        setDescription('');
        setDate('');
    };

    return (
        <div className={styles.main}>
            <form>
                <TextField
                    label='Name *'
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    variant='outlined'
                ></TextField>
                <TextField
                    label='Amount *'
                    value={amount}
                    type='number'
                    variant='outlined'
                    onChange={(e) => {
                        setAmount(e.target.value);
                    }}
                ></TextField>
                <TextField
                    label='Description'
                    value={description}
                    variant='outlined'
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                ></TextField>
                <TextField
                    label='Date *'
                    value={date || dateToStringFormatter(new Date())}
                    variant='outlined'
                    type='datetime-local'
                    onChange={(e) => {
                        setDate(e.target.value);
                    }}
                ></TextField>
                <div className={styles.buttonsContainer}>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={() => {
                            if (name && amount && date) {
                                setItems((items) => {
                                    const _items = [...items];
                                    _items.forEach((_item) => {
                                        if (_item.id === item.id) {
                                            _item.name = normalizeString(name);
                                            _item.amount = parseFloat(amount);
                                            _item.description = normalizeString(
                                                description
                                            );
                                            _item.date = date;
                                        }
                                    });
                                    return _items.sort(
                                        (a, b) =>
                                            new Date(b.date) - new Date(a.date)
                                    );
                                });
                                clearInputs();
                                setShowEditItemModal(false);
                                return;
                            }
                            alert('Name, amount and date are required inputs');
                        }}
                    >
                        Update
                    </Button>
                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={() => {
                            clearInputs();
                            setShowEditItemModal(false);
                        }}
                    >
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
}
