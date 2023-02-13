import axios from 'axios';

axios.defaults.baseURL = 'https://63e6663183c0e85a8692e926.mockapi.io/api/v1/';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function deleteContact(contactID) {
  const { data } = await axios.delete(`/contacts/${contactID}`);
  return data;
}
