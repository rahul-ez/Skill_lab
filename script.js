function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

function submitForm(event) {
  event.preventDefault();
  window.alert("Thank you for contacting me!");
  return false;
}
