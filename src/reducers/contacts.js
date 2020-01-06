import { REQUEST_CONTACTS, RECEIVE_CONTACTS} from '../actions/contacts.js';

export function contactsForContact(state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_CONTACTS:
      return Object.assign({}, state, { isFetching: false,});
    case RECEIVE_CONTACTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.contacts
    });
    default:
      return state;
  };
};