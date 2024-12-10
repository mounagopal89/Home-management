import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactsManagement = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('/api/contacts');
                setContacts(response.data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchContacts();
    }, []);

    return (
        <div>
            <h1>Contacts Management</h1>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>{contact.name} - {contact.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default ContactsManagement;