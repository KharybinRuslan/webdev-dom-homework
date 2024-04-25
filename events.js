document.addEventListener('DOMContentLoaded', () => {
    const deleteButton = document.getElementById('delete-button');
    deleteButton.addEventListener('click', () => {
        const commentsList = document.getElementById('list');
        const lastComment = commentsList.lastElementChild;
        if (lastComment) {
            lastComment.remove();
        }
    });
});