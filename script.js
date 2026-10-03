const navigation = document.querySelector('.mobile-nav');
const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.open = false;
  });
});

document.addEventListener('click', (event) => {
  if (navigation?.open && !navigation.contains(event.target)) {
    navigation.open = false;
    navigation.querySelector('summary')?.setAttribute('aria-expanded', 'false');
  }
});

navigation?.addEventListener('toggle', () => {
  navigation.querySelector('summary')?.setAttribute('aria-expanded', String(navigation.open));
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  status.textContent = 'Os campos estão preenchidos, mas nada foi enviado. Configure um canal de atendimento para ativar este formulário.';
});
