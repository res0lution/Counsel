import { REQUEST_CONTACTS, RECEIVE_CONTACTS} from '../actions/contacts.js';

function contacts( 
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_CONTACTS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_CONTACTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.contacts,
       });
    default:
      return state;
  };
};

export function contactsForContact(state = {}, action) {
  switch (action.type) {
    case RECEIVE_CONTACTS:
    case REQUEST_CONTACTS:
      return Object.assign({}, state, {
        dataContacts: contacts(state[action.contacts], action)
      });
    default:
      return state;
  };
};