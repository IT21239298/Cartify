import React, { useState } from 'react';
import Contactustable from '../components/Contactustable';
import { useGet_ContactusQuery, useAddContactMutation } from "../components/Store/apiSlice"

function Admincontact() {
  // Fetch contact data
  const { data: contacts, error, isLoading } = useGet_ContactusQuery();

  // Add new contact
  const [addContact, { isLoading: isAdding, error: addError }] = useAddContactMutation();
  const [newContact, setNewContact] = useState({ name: '', email: '', message: '' });

  const handleAddContact = async () => {
    try {
      await addContact(newContact).unwrap();
      setNewContact({ name: '', email: '', message: '' }); // Clear input fields after successful addition
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  if (isLoading) {
    return <div className="container mx-auto">Loading...</div>;
  }

  if (error || addError) {
    return <div className="container mx-auto">Error fetching data: {error?.message || addError?.message}</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contacts</h1>
      <Contactustable contacts={contacts ?? []} />
      
      </div>
    
  );
}

export default Admincontact;
