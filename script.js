'use strict';

//Функция получения данных
const getData = () => {

  const user = fetch('./db.json');
  user
    .then(response => response.json())
    .then(data => {
      //Отправка
      sendDate('https://jsonplaceholder.typicode.com/posts', data);
    })
    .catch(error => {
      console.log(error);
    });
};
getData();


//Функция отправки
const sendDate = (link, object) => {
  fetch(link, {
    method: 'POST',
    body: JSON.stringify(object),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};