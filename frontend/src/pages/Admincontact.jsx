import React from 'react'
import Contactustable from '../components/Contactustable';

function Admincontact() {
    const contacts = [
        { id: 1, name: 'John Doe', email: 'johndoe@example.com', message: 'Hello!' },
        { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', message: 'Hi there!' },
        // Add more contact objects as needed
      ];
    
      return (
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-4">Contacts</h1>
          <Contactustable contacts={contacts} />
        </div>
      );
}

export default Admincontact