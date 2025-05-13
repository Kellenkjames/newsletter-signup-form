import { state } from './model.js';
import formView from './view.js';

const form = new formView();
const button = form.form.querySelector('.content__form-button');

/**
 * Validates an email address using a regex pattern.
 * @param {string} email - The email address to validate.
 * @returns {boolean} True if valid, false otherwise.
 */
const isValidEmail = email => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

/**
 * Handles form submission:
 * - Prevents default form behavior
 * - Validates input
 * - Updates UI via formView methods
 * - Updates application state
 * @param {Event} e - The click or submit event
 */
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

// Handle form submit button click
button.addEventListener('click', handleSubmit);

// Handle modal dismiss button
form.dismissBtn.addEventListener('click', () => form.hideModal());

/**
 * Global keydown handler:
 * - Submits form on Enter
 * - Dismisses modal on Escape
 */
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && document.activeElement === form.emailInput) {
    handleSubmit(e);
  }

  if (e.key === 'Escape' && state.isModalOpen) {
    form.hideModal();
    state.isModalOpen = false;
  }
});
