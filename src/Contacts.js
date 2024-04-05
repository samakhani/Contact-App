import React, { useState } from "react";
import inputs from "./input";
import ContactList from "./ContactList";
import styles from "./style.module.css";

const Contacts = () => {
    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });
    const [contactList, setContactList] = useState([]);
    const [alert, setAlert] = useState("");

    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact((contact) => ({ ...contact, [name]: value }));
    };

    const addHandler = () => {
        if (!contact.firstName || !contact.lastName || !contact.email || !contact.phone) {
            setAlert("Enter Valid Data");
            return;
        }

        setAlert("");

        const newContact = {
            ...contact,
            id: contactList.length === 0 ? 1 : contactList[contactList.length - 1].id + 1,
        };

        setContactList((contactList) => [...contactList, newContact]);

        setContact({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
        });
    };

    const deleteHandler = (contactId) => {
        setContactList(contactList.filter((contact) => contact.id !== contactId));
    };
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                {inputs.map((input, i) => (
                    <input
                        key={i}
                        type={input.type}
                        name={input.name}
                        value={contact[input.name]}
                        placeholder={input.placeholder}
                        onChange={changeHandler}
                    />
                ))}
                <button onClick={addHandler}>Add Contact</button>
            </div>
            <div className={styles.alert}>{alert && <p>{alert}</p>}</div>

            <ContactList contactList={contactList} onDelete={deleteHandler} />
        </div>
    );
};

export default Contacts;
