import throttle from 'lodash.throttle';
// Беремо посилання на форму і інтпути
const formEl = document.querySelector('.feedback-form')
const LOCALSTORAGE_KEY = 'feedback-form-state';

// Виклик ф-ї для внесення даних при перезавантаженні сторінки
pageInit();
// Створюємо об'єкт, з даними з локалсторадж(якщо вони є) АБО пустий об'єкт, в який будемо вносити дані
const formData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};
// Вішаємо слухачів на внесення в форму і натиск кнопки сабміт
formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onSubmitClick);

function onFormInput(evt) {
    // Вносимо в наш об'єкт дані "evt.target.value" під ключем об'єкта "evt.target.name"
    formData[evt.target.name] = evt.target.value
    // Вносимо в локал сторадж об'єкт "JSON.stringify(formData)" під ключем 'feedback-form-state'
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData))
}

function onSubmitClick(evt) {
    // Виключаємо дефолтну поведінку
    evt.preventDefault();
    // Очищуємо форму після сабміту
    evt.target.reset();
    // Виводимо по сабміту в консоль об'єкт з локал страдж черес джейсон.парс
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)))
    // Очищаємо локал сторадж
    localStorage.removeItem(LOCALSTORAGE_KEY)  
}

function pageInit() {
    const savedData = localStorage.getItem(LOCALSTORAGE_KEY)
    // Перевіряємо чи щось було в локал сторадж перед перезагрузкою сторінки. 
    if (savedData) {
        try {
            const parseData = JSON.parse(savedData)
            formEl.elements.email.value = parseData.email || '';
            formEl.elements.message.value = parseData.message || '';
        } catch (error) {
            console.log(error);
        }
    }
}