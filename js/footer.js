document.addEventListener('DOMContentLoaded', function() {
  const footerContent = document.querySelector('.m-footer__content');
  const privacyLink = document.createElement('a');
  const privacySpan = document.createElement('span');
  privacyLink.href = '/politica-de-privacidad';
  privacyLink.textContent = 'Política de privacidad';
  privacySpan.appendChild(privacyLink);
  footerContent.appendChild(privacySpan);
});
