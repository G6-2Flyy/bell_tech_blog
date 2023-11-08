

async function logout () {
    try {
        const response = await fetch('/api/users/logout', {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.ok) {
            window.location.replace('/')
        } else {
            console.log(response)
            showErrorMessage('Failed to logout, please try again! ')
        }
    } catch (error) {
        showErrorMessage('An error ocurred, please try again! ')
    }
}

document.querySelector('#logout').addEventListener('click', logout)

let timerId;
let currentTimer = 0;

function startIdleTime() {
  currentTimer++;
  if (currentTimer > 15) {
    logout();
  }
}

function resetTimer() {
  clearInterval(timerId);
  currentTimer = 0;
  timerId = setInterval(startIdleTime, 60000);
}

window.onload = resetTimer;
window.onmousemove = resetTimer;
window.onmousedown = resetTimer;
window.ontouchstart = resetTimer;
window.onclick = resetTimer;
window.onkeydown = resetTimer;