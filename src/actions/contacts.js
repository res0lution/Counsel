import axios from 'axios';

export const REQUEST_CONTACTS = 'REQUEST_CONTACTS';
export const RECEIVE_CONTACTS = 'RECEIVE_CONTACTS';

function receiveContacts(contacts, json) {
  return {
    type: RECEIVE_CONTACTS,
    contacts: json,
  };
};

function requestContacts(contacts) {
  return {
    type: REQUEST_CONTACTS,
    contacts,
  };
};

const fetchContacts = (contacts) => (dispatch) => {
  dispatch(requestContacts(contacts));
  return axios.get(`http://localhost:3001/contacts`)
    .then(
      (json)=> { dispatch(receiveContacts(contacts, json.data)) },
      (error)=>{ console.log(error)}
    )
};

function shouldFetchContacts(state) {
  const contacts = state.contacts;
  if (!contacts) {
    return true;
  } else if (contacts.isFetching) {
    return false;
  };
};

export const fetchContactsForContact = (contacts) => (dispatch, getState) => {
  if (shouldFetchContacts(getState())) {
    return dispatch(fetchContacts(contacts));
  };
};