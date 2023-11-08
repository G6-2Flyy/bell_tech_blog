function showSuccessMessage(msg) {
  const messageEl = document.querySelector(".message");
  const html = `<p class="success">${msg}</p>`;
  messageEl.innerHTML = html;
  setTimeout(() => {
    messageEl.innerHTML = "";
  }, 3000);
}

function showErrorMessage(msg) {
  const messageEl = document.querySelector(".message");
  const html = `<p class="error">${msg}</p>`;
  messageEl.innerHTML = html;
  setTimeout(() => {
    messageEl.innerHTML = "";
  }, 3000);
}



