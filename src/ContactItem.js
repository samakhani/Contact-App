import React from "react";
import TrashIcon from "./TrashIcon";
import styles from "./style.module.css";
import EmailIcon from "./EmailIcon";
import PhoneIcon from "./PhoneIcon";

const ContactItem = ({ data: { firstName, lastName, email, phone, id }, onDelete }) => {
    return (
        <div className={styles.contactItem}>
            <div className={styles.name}>
                {firstName} {lastName}
            </div>
            <div className={styles.email}>
                <EmailIcon />
                {email}
            </div>
            <div className={styles.email}>
                <PhoneIcon />
                {phone}
            </div>
            <div onClick={() => onDelete(id)} className={styles.trashIcon}>
                <TrashIcon />
            </div>
        </div>
    );
};

export default ContactItem;
