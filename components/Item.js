import styles from '../styles/modules/Item.module.scss';
import { AccessTime, Edit, Delete } from '../shared/material';
import dateToStringRespresentation from '../functions/dateToStringRepresentation';
import EditItemModal from '../components/EditItemModal';
import DeleteItemModal from '../components/DeleteItemModal';
import { useState } from 'react';

export default function Item(props) {
    const { name, amount, description, date } = props.item;
    const [showEditItemModal, setShowEditItemModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    return (
        <div className={styles.main}>
            <div
                className={styles.delete}
                onClick={() => setShowDeleteModal(true)}
            >
                <Delete></Delete>
            </div>
            <div
                className={styles.edit}
                onClick={() => setShowEditItemModal(true)}
            >
                <Edit></Edit>
            </div>
            <h3>{name}</h3>
            <div className={styles.container}>
                <img src={amount > 0 ? '/income.svg' : 'outcome.svg'}></img>
                &nbsp;&nbsp; {amount > 0 ? '+' : '-'}${Math.abs(amount)}
            </div>
            <h4>{description}</h4>
            <div className={styles.container}>
                <AccessTime></AccessTime>
                <span>{dateToStringRespresentation(new Date(date))}</span>
            </div>
            {showEditItemModal ? (
                <EditItemModal
                    onClose={setShowEditItemModal}
                    item={props.item}
                ></EditItemModal>
            ) : (
                <></>
            )}

            {showDeleteModal ? (
                <DeleteItemModal
                    onClose={setShowDeleteModal}
                    item={props.item}
                ></DeleteItemModal>
            ) : (
                <></>
            )}
        </div>
    );
}
