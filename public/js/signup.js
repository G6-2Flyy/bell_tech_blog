document.querySelector('#signup-form').addEventListener('submit', async (event)=> {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    
    if (!username || !password) {
        showErrorMessage('Username and Password are required! ')
        return 
    }
    if (password.length < 5 || password.length > 15) {
        showErrorMessage('Password must be between 5 and 15 characters! ')
        return
    }
    try {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({username, password}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.ok) {
            window.location.replace('/dashboard')
        } else {
            console.log(response)
            showErrorMessage('Failed to create user, please try again! ')
        }
         if (password.length < 5 || password.length > 15) {
        showErrorMessage('Password must be between 5 and 15 characters! ')
        return
    }
    } catch (error) {
        showErrorMessage('An error ocurred, please try again! ')
    }
})

document.querySelector('#login-form').addEventListener('submit', async (event)=> {
    event.preventDefault();

    const username = document.querySelector('#login-username').value.trim();
    const password = document.querySelector('#login-password').value.trim();
    
    if (!username || !password) {
        showErrorMessage('Username and Password are required! ')
        return 
    }
   

    try {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({username, password}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.ok) {
            window.location.replace('/dashboard')
        } else {
            console.log(response)
            showErrorMessage('Failed to login, please try again! ')
        }
    } catch (error) {
        showErrorMessage('An error ocurred, please try again! ')
    }
})