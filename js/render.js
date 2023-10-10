// Создание карточки
export function renderCard(obj) {
    const $card = document.createElement('div'),
        $cardTop = document.createElement('div'),
        $cardBottom = document.createElement('div'),
        $cardBox = document.createElement('div'),
        $cardDate = document.createElement('p'),
        $cardIcon = document.createElement('img'),
        $cardTitle = document.createElement('h4'),
        $cardDescr = document.createElement('p'),
        $cardLocation = document.createElement('span'),
        $cardLink = document.createElement('a'),
        $cardBtns = document.createElement('div'),
        $cardBtn = document.createElement('button'),
        $cardMore = document.createElement('a');
    
    $cardDate.textContent = obj.date_range;
    $cardDate.classList.add('card__date');

    $cardIcon.src = obj.logo;
    $cardIcon.alt = 'Логотип конференции';
    $cardIcon.classList.add('card__icon');  

    $cardTop.append($cardDate, $cardIcon);
    $cardTop.classList.add('card__top');

    $cardTitle.textContent = obj.name;
    $cardTitle.classList.add('card__title');    

    $cardDescr.textContent = obj.brief;
    $cardDescr.classList.add('card__descr');  

    $cardLocation.textContent = obj.location;
    $cardLocation.classList.add('card__location');

    $cardLink.textContent = obj.uri;
    $cardLink.href = obj.uri;
    $cardLink.target = '_blank';
    $cardLink.classList.add('card__link');  
    
    $cardBox.append($cardLocation, $cardLink);
    $cardBox.classList.add('card__box');

    $cardBtn.textContent = 'Купить билет';
    $cardBtn.classList.add('card__btn');
    
    $cardMore.textContent = 'Подробнее';
    $cardMore.href = '#';
    $cardMore.target = '_blank';
    $cardMore.classList.add('card__more');    

    $cardBtns.append($cardBtn, $cardMore);
    $cardBtns.classList.add('card__btns');    
    
    $cardBottom.append($cardDescr, $cardBox, $cardBtns);
    $cardBottom.classList.add('card__bottom');

    $card.classList.add('card');
    $card.append($cardTop, $cardTitle,  $cardBottom);

    return $card;
}

// Создание списка карточек
export function renderList(arr) {
    console.log('object');
    const copyArr = [...arr];
    const $list = document.createElement('ul');

    for (const obj of copyArr) {
        const $li = document.createElement('li');
        $li.append(renderCard(obj));
        $li.classList.add('conferences__item');
        $list.append($li);        
    }
    
    $list.classList.add('conferences__list');

    return $list
}