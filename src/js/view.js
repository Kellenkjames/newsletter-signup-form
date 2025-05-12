export default class formView {
  constructor() {
    this.container = document.querySelector('.container');
    this.modal = document.querySelector('.modal');
    this.successMessage = this.modal.querySelector('.modal__message');
    this.form = document.querySelector('.content__form');
    this.emailInput = document.getElementById('emailField');
    this.errorMessage = document.querySelector('.error-message');
    this.dismissBtn = document.querySelector('.modal__button');
  }

  showModal() {
    this.modal.classList.add('open');
    this.container.classList.add('hidden');
  }

  hideModal() {
    this.modal.classList.remove('open');
    this.container.classList.remove('hidden');
  }

  showError(message) {
    this.errorMessage.textContent = message;
    this.errorMessage.classList.add('visible');
    this.emailInput.setAttribute('aria-invalid', 'true');
  }

  clearError() {
    this.errorMessage.textContent = '';
    this.errorMessage.classList.remove('visible');
    this.emailInput.setAttribute('aria-invalid', 'false');
  }

  renderSuccessEmail(email) {
    this.successMessage.innerHTML = `A confirmation email has been sent to <strong>${email}</strong>. Please open it to confirm your subscription.`;
  }
}
