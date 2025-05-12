import { state } from './model.js';
import formView from './view.js';

const form = new formView();
const button = form.form.querySelector('.content__form-button');

const isValidEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const handleSubmit = e => {
  e.preventDefault();
  const cleanInput = form.emailInput.value.trim();

  if (isValidEmail(cleanInput)) {
    form.clearError();
    form.renderSuccessEmail(cleanInput);
    form.showModal();
    form.emailInput.value = '';
    state.isModalOpen = true;
  } else {
    form.showError('Valid email is required');
    state.isModalOpen = false;
  }
};

button.addEventListener('click', handleSubmit);
form.dismissBtn.addEventListener('click', () => form.hideModal());

// Handling additional keyboard events
document.addEventListener('keydown', e => {
  // Submit form on Enter
  if (e.key === 'Enter' && document.activeElement === form.emailInput) {
    handleSubmit(e);
  }

  // Dismiss modal on Escape
  if (e.key === 'Escape' && state.isModalOpen) {
    form.hideModal();
    state.isModalOpen = false;
  }
});
