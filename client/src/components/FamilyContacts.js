import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FamilyContacts.css'; // Import the CSS file for the family contacts page

const FamilyContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [form, setForm] = useState({
    fullname: '',
    relationship: '',
    relatedPersonName: '',
    place: '',
    contactNumber: ''
  });
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  useEffect(() => {
    setFilteredContacts(
      contacts.filter(contact =>
        contact.fullname.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, contacts]);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/contacts');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingContact) {
        await axios.put(`http://localhost:5000/api/contacts/${editingContact._id}`, form);
        setEditingContact(null);
      } else {
        await axios.post('http://localhost:5000/api/contacts', form);
      }
      fetchContacts();
      setForm({ fullname: '', relationship: '', relatedPersonName: '', place: '', contactNumber: '' });
    } catch (error) {
      console.error('Error adding/updating contact:', error);
    }
  };

  const handleEdit = (contact) => {
    setForm(contact);
    setEditingContact(contact);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/contacts/${id}`);
      fetchContacts();
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div className="family-contacts-container">
      <h2>Family Contacts</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name:</label>
        <input type="text" id="fullname" name="fullname" value={form.fullname} onChange={handleChange} required />

        <label htmlFor="relationship">Relationship:</label>
        <input type="text" id="relationship" name="relationship" value={form.relationship} onChange={handleChange} required />

        <label htmlFor="relatedPersonName">Related Person Name:</label>
        <input type="text" id="relatedPersonName" name="relatedPersonName" value={form.relatedPersonName} onChange={handleChange} required />

        <label htmlFor="place">Place:</label>
        <input type="text" id="place" name="place" value={form.place} onChange={handleChange} required />

        <label htmlFor="contactNumber">Contact Number:</label>
        <input type="text" id="contactNumber" name="contactNumber" value={form.contactNumber} onChange={handleChange} required />

        <button type="submit">{editingContact ? 'Update Contact' : 'Add Contact'}</button>
      </form>

      <div className="search-bar">
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by full name"
        />
      </div>

      <h3>Contact List</h3>
      <table className="contact-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Relationship</th>
            <th>Related Person Name</th>
            <th>Place</th>
            <th>Contact Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.fullname}</td>
              <td>{contact.relationship}</td>
              <td>{contact.relatedPersonName}</td>
              <td>{contact.place}</td>
              <td>{contact.contactNumber}</td>
              <td>
                <button onClick={() => handleEdit(contact)}>Edit</button>
                <button onClick={() => handleDelete(contact._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FamilyContacts;