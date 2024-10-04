// На сторінці є форма "Новий користувач"
// У форму вже введені дані користувача
// Потрібно отримати дані з усіх полів та повернути та подати у вигляді наступних змінних
// name, phoneNumber, dataOfBirth, emailAddress

// Твій код має бути тут

const name = document.querySelector('input[name="fio"]').value;
const phoneNumber = document.querySelector('input[name="phone"]').value;
const dateOfBirth = document.querySelector('input[name="birthday"]').value;
const emailAddress = document.querySelector('input[name="email"]').value;


module.exports = {
    name,
    phoneNumber,
    dateOfBirth,
    emailAddress,
};
