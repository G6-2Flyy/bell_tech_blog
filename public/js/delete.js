async function deletePost(event) {
   const id = parseInt(event.target.dataset.id)

    try {
        const response = await fetch('/api/posts/' + id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.ok) {
            window.location.replace('/dashboard')
            console.log(response)
        } else {
            console.log(response)
            showErrorMessage('Failed to delete a post, please try again! ')
        }
        
    } catch (error) {
        showErrorMessage('An error ocurred, please try again! ')
    }
}

document.querySelector('#delete').addEventListener('click', deletePost)
