let phrases = [
    'отправить другу смешную гифку',
    'посмотреть скидки на авиабилеты',
    'разобраться, о чём поют рэперы',
    'Юрий Дудь',
    'расставить книги на полке по цвету',
    'читать про зарплаты в Сан-Франциско'
];
function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random * phrases.length);
    return arr[randIndex];
}
let button = document.querySelector('.button');

phrase.textContent = getRandomElement(phrases);