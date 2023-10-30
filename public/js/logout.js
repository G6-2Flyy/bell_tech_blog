

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