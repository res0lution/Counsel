import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal.js';
  
export function stateModal(state = { show: false }, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, {
        show: true
      });
    case CLOSE_MODAL:
      return Object.assign({}, state, {
        show: false
      });
    default:
      return state;
  };
};