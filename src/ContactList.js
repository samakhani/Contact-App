import React from "react";
import ContactItem from "./ContactItem";
import styles from "./style.module.css";

const ContactList = ({ contactList, onDelete }) => {
    return (
        <div className={styles.contactList}>
            <h2>contact List</h2>
            {contactList.length ? (
                <>
                    {contactList.map((contact) => {
                        return <ContactItem data={contact} onDelete={onDelete} />;
                    })}
                </>
            ) : (
                <p>No Data</p>
            )}
        </div>
    );
};

export default ContactList;
