const likeEvent = (listComments) => {
    const likes = document.querySelectorAll('.like-button');
    likes.forEach((likeElement, index) => {
        likeElement.addEventListener('click', (e) => {
            e.stopPropagation();
            const direction = listComments[index].isLiked ? -1 : +1;
            listComments[index].likes += direction;
            listComments[index].isLiked = !listComments[index].isLiked;
            renderComments(listComments);
        })
    });
}

export const renderComments = (listComments) => {
    const commentsList = document.getElementById('list');
    const commentsHTML = listComments.map((userComment, index) => {
        let textHTML;
        textHTML = `<li class="comment">
            <div class="comment-header">
                <div>${userComment.author.name}</div>
                <div>${new Date(userComment.date).toLocaleDateString() + " " + new Date(userComment.date).getHours() + ":" + new Date(userComment.date).getMinutes()}</div>
            </div>
            <div class="comment-body">
                <div class="comment-text">
                    ${userComment.text}
                </div>
            </div>
            <div class="comment-footer">
                <div class="likes">
                    <span class="likes-counter">${userComment.likes}</span>
                    <button class="like-button ${userComment.isLiked ? "-active-like" : ""}" data-index='${index}'></button>
                </div>
            </div>
        </li>`
        return textHTML;
    }).join('');
    commentsList.innerHTML = commentsHTML;
    likeEvent(listComments);
}