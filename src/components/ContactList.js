import React from 'react';

const ContactList = () => {
  const contacts = [
    { name: 'Raul Musaev', email: 'raul@example.com' },
    { name: 'Maria Petrova', email: 'maria@example.com' },
    { name: 'Gasan Guseinov', email: 'gasan@example.com' }
  ];

  return (
    <div className="contact-list">
      <h2>Список контактов</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <strong>{contact.name}</strong> - {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;