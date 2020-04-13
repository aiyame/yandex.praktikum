let phrases = [
    'отправить другу смешную гифку',
    'посмотреть скидки на авиабилеты',
    'разобраться, о чём поют рэперы',
    'Юрий Дудь',
    'расставить книги на полке по цвету',
    'читать про зарплаты в Сан-Франциско'
];

function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

phrase.textContent = getRandomElement(phrases);

button.addEventListener('click', function(){
        let randomElement = getRandomElement(phrases);
        phrase.textContent = randomElement;

        if (randomElement.length > 40) {
            advice.style.fontSize = '33px';
        } else {
            advice.stype.fontSize = '42px';
        }

}

);