export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function openModal(show) {
  return {
    type: OPEN_MODAL,
    show,
  };
};
  
export function closeModal(show) {
  return {
    type: CLOSE_MODAL,
    show,
  };
};