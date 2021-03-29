import { useState } from 'react';
import dateToStringFormatter from '../functions/dateToStringFormatter';
import normalizeString from '../functions/normalizeString';
import { TextField, Button } from '../shared/material';
import styles from '../styles/modules/AddItemModal.module.scss';
import { v4 as uuid } from 'uuid';

export default function AddItemModal(props) {
    const { onClose: setShowAddItemModal, setItems } = props;
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

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
                                    return [
                                        {
                                            id: uuid(),
                                            name: normalizeString(name),
                                            amount: parseFloat(amount),
                                            description: normalizeString(
                                                description
                                            ),
                                            date: date
                                                ? date
                                                : dateToStringFormatter(
                                                      new Date()
                                                  ),
                                        },
                                        ...items,
                                    ].sort(
                                        (a, b) =>
                                            new Date(b.date) - new Date(a.date)
                                    );
                                });
                                clearInputs();
                                setShowAddItemModal(false);
                                return;
                            }
                            alert('Name, amount and date are required inputs');
                        }}
                    >
                        Add
                    </Button>
                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={() => {
                            clearInputs();
                            setShowAddItemModal(false);
                        }}
                    >
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
}
