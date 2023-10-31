async function newComment(event) {
    event.preventDefault()
    event.stopPropagation()
    
    const comment = document.querySelector('#comment').value
    const post_id = document.querySelector('#post').value

    if (!comment) {
        showErrorMessage('A comment is required! ')
        return 
    }

    try {
        const response = await fetch('/api/comments', {
            method: 'post',
            body: JSON.stringify({comment, post_id}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.ok) {
            // window.location.replace('/posts/' + post_id)
            console.log(response)
        } else {
            console.log(response)
            showErrorMessage('Failed to post a comment, please try again! ')
        }
        
    } catch (error) {
        showErrorMessage('An error ocurred, please try again! ')
    }
}

document.querySelector('#comment-form').addEventListener('submit', newComment)
