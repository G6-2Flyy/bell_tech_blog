async function newPost(event) {
    event.preventDefault()
    
    const title = document.querySelector('#title').value
    const content = document.querySelector('#content').value

    if (!title || !content) {
        showErrorMessage('Title and content are required! ')
        return 
    }

    try {
        const response = await fetch('/api/posts', {
            method: 'post',
            body: JSON.stringify({title, content}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.ok) {
            window.location.replace('/dashboard')
        } else {
            console.log(response)
            showErrorMessage('Failed to create post, please try again! ')
        }
        
    } catch (error) {
        showErrorMessage('An error ocurred, please try again! ')
    }
}

document.querySelector('#post-form').addEventListener('submit', newPost)
