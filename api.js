export function getComments() {
    return fetch("https://wedev-api.sky.pro/api/v1/dmitrii-bondar/comments", {
      method: "GET",
    })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Сервер упал");
      }
    })
    .then((data) => data.comments)
    .catch(() => {
      alert('Что-то пошло не так с получением комментариев...');
    });
  }
  
  export function postComment(name, text) {
    return fetch("https://wedev-api.sky.pro/api/v1/dmitrii-bondar/comments", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        text: text,
        forceError: true,
      }),
    })
    .then((response) => {
      if (response.status === 201) {
        return response.json();
      } else if (response.status === 400) {
        alert(`Server error ${response.status}\n\nВведите не менее 3-х символов.`);
        throw new Error("Сервер упал 400");
      } else if (response.status === 500) {
        alert(`Server error ${response.status}`);
        return postComment(name, text); // Повторная попытка отправить комментарий в случае ошибки сервера
      }
    })
    .then(() => getComments()) // Получаем обновленный список комментариев после отправки нового
    .catch((error) => {
      console.warn(error);
    });
  }