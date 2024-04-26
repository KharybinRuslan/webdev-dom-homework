import { postComment } from './api.js';
import { renderComments } from './render.js'; // добавлен импорт

document.addEventListener('DOMContentLoaded', () => {
    const deleteButton = document.getElementById('delete-button');
    deleteButton.addEventListener('click', () => {
        const commentsList = document.getElementById('list');
        const lastComment = commentsList.lastElementChild;
        if (lastComment) {
            lastComment.remove();
        }
    });

    const writeButton = document.getElementById('writeButton');
    writeButton.addEventListener('click', () => {
        const userName = document.getElementById('userName').value.trim();
        const userComment = document.getElementById('userComment').value.trim();
        
        if (userName && userComment) {
            postComment(userName, userComment)
                .then((comments) => {
                    renderComments(comments);
                })
                .catch((error) => {
                    console.error('Ошибка при отправке комментария:', error);
                });
        } else {
            console.error('Пожалуйста, заполните все поля для отправки комментария.');
        }
    });
});