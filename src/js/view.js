/**
 * Class representing the view layer for the newsletter form.
 * Handles all DOM updates and UI feedback logic.
 */
export default class formView {
  /** @type {HTMLElement} The main layout container */
  container = document.querySelector('.container');

  /** @type {HTMLElement} The modal element */
  modal = document.querySelector('.modal');

  /** @type {HTMLElement} The element showing the success email */
  successMessage = this.modal.querySelector('.modal__message');

  /** @type {HTMLFormElement} The form element */
  form = document.querySelector('.content__form');

  /** @type {HTMLInputElement} The email input field */
  emailInput = document.getElementById('emailField');

  /** @type {HTMLElement} The error message container */
  errorMessage = document.querySelector('.error-message');

  /** @type {HTMLButtonElement} The dismiss button inside the modal */
  dismissBtn = document.querySelector('.modal__button');

  /** Displays the modal and hides the main container */
  showModal() {
    this.modal.classList.add('open');
    this.container.classList.add('hidden');
  }

  /** Hides the modal and shows the main container */
  hideModal() {
    this.modal.classList.remove('open');
    this.container.classList.remove('hidden');
  }

  /**
   * Displays an error message and sets ARIA state to invalid.
   * @param {string} message - The error message to show
   */
  showError(message) {
    this.errorMessage.textContent = message;
    this.errorMessage.classList.add('visible');
    this.emailInput.setAttribute('aria-invalid', 'true');
  }

  /** Clears the error message and resets ARIA state */
  clearError() {
    this.errorMessage.textContent = '';
    this.errorMessage.classList.remove('visible');
    this.emailInput.setAttribute('aria-invalid', 'false');
  }

  /**
   * Renders the submitted email address inside the modal message.
   * @param {string} email - The user-submitted email to display
   */
  renderSuccessEmail(email) {
    this.successMessage.innerHTML = `A confirmation email has been sent to <strong>${email}</strong>. Please open it to confirm your subscription.`;
  }
}
