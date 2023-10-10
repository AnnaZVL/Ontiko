import { renderCard, renderList } from "./render.js";

// Получение данных от сервера
async function getData() {
    try {
        const response = await fetch('https://conf.ontico.ru/api/conferences/forCalendar.json')
        .then((function(e) {
            return e.json()
        }))
        .then((function(e) {                    
            return [...e.result]
        }))
        
        return response
    } catch (e) {
        console.log("err", e)        
    }     
};

// Добавление списка карточек на страницу
const $section = document.querySelector('.conferences')

$section.append(renderList(await getData()));

//Модальное окно
const $btnOpen = document.querySelectorAll('.card__btn'),
    $modal = document.querySelector('.modal'),
    $btnExit = document.querySelector('.modal__btn-icon');

$btnOpen.forEach(button => {
    button.addEventListener('click', () => {
        $modal.classList.add('open');
        disableScroll();
    });
});

$btnExit.addEventListener('click', () => {
    if ($modal) {
        $modal.classList.remove('open');
    }
    enableScroll()
});

//Запрет скрола при открытом модальном окне и убран прыжок на ширину скрола
function disableScroll() {
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    document.body.classList.add('disable-scroll');
    document.body.style.paddingRight = paddingOffset;
};

//Возвращение скрола при закрытии модального окна
function enableScroll() {
    document.body.classList.remove('disable-scroll');
    document.body.style.paddingRight = 0;
};
