// import throttle from 'lodash.throttle';
// 1. Беремо посилання на форму
const formEl = document.querySelector('.feedback-form')

// const LOCALSTORAGE_DATA = 'feedback-form-state';

// 2. Виклик ф-ї для внесення даних при перезавантаженні сторінки
qwe();
// 3. Створюємо пустий об'єкт, який потім будемо заводити в локалсторадж
const formData = {}
// 4. Вішаємо слухачів на внесення в форму і натиск кнопки сабміт
formEl.addEventListener('input', onEmailAreaInput);
formEl.addEventListener('submit', onSumbitClick);


function onEmailAreaInput(evt) {
    // console.log(evt.target.name)
    // 5. Вносимо в наш об'єкт дані "evt.target.value" під ключем об'єкта "evt.target.name"
    formData[evt.target.name] = evt.target.value
    // console.log(formData)
    // 6. Вносимо в локал сторадж об'єкт "JSON.stringify(formData)" під ключем 'feedback-form-state'
    localStorage.setItem('feedback-form-state', JSON.stringify(formData))
}

function onSumbitClick(evt) {
    evt.preventDefault();
    // Очищуємо форму після сабміту
    evt.target.reset();
    // 7. Виводимо по сабміту в консоль об'єкт з локал страдж черес джейсон.парс
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')))
    // Очищаємо локал сторадж
    localStorage.removeItem('feedback-form-state')
    
}

function qwe() {
    const savedData = JSON.parse(localStorage.getItem('feedback-form-state'))
    // 9. Перевіряємо чи щось було в локал сторадж перед перезагрузкою сторінки. 
    if (savedData) {
        console.log(savedData)
    }
    
}