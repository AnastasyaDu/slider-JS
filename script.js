const arrowLeft = document.querySelector('.slider-arrow-left');
const arrowRight = document.querySelector('.slider-arrow-right');

const slider = document.querySelector('.slider');

const entities = [
  {
    img: 'project-rostov.png',
    dot: document.querySelector('.dot-1'),
    line: document.querySelector('.line-decorate-1'),
    city: 'Rostov-on-Don LCD admiral',
    area: '81 m2',
    time: '3.5 months'
  },

  {
    img: 'project-sochi.png',
    dot: document.querySelector('.dot-2'),
    line: document.querySelector('.line-decorate-2'),
    city: 'Sochi Thieves',
    area: '105 m2',
    time: '4 months'
  },

  {
    img: 'project-rostov2.png',
    dot: document.querySelector('.dot-3'),
    line: document.querySelector('.line-decorate-3'),
    city: 'Rostov-on-Don, Patriotic',
    area: '93 m2',
    time: '3 months'
  }
]

//Поменять картинку и текст
const setEntity = (index) => {
  slider.style.backgroundImage = `url(${entities[index].img})`;
}
const changeTextContent = (index) => {
  document.querySelector('.city-text').textContent = entities[index].city;
  document.querySelector('.area').textContent = entities[index].area;
  document.querySelector('.time').textContent = entities[index].time;
}


const makeActive = (index) => {
  entities[index].dot.style.opacity = 1;
  entities[index].line.classList.add('brown-hypertext');
}


const makeInactive = (index) => {
  entities[index].dot.style.opacity = 0.3;
  entities[index].line.classList.remove('brown-hypertext');
}

//Переключение нажатием на точку или ссылку
const pressOnElement = (index) => {
  makeInactive(currentIndex);
  changeTextContent(index);
  currentIndex = index;
  setEntity(currentIndex);
  makeActive(currentIndex);
}



let currentIndex = 0;


//Левая стрелка
arrowLeft.addEventListener('click', () => {
  makeInactive(currentIndex);

  if (currentIndex == 0) {
    currentIndex = entities.length - 1;
  } else {
    currentIndex -=1;
  }

  changeTextContent(currentIndex);
  setEntity(currentIndex);
  makeActive(currentIndex);
})

//Правая стрелка
arrowRight.addEventListener('click', () => {
  makeInactive(currentIndex);

  if (currentIndex == entities.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex +=1;
  }

  changeTextContent(currentIndex);
  setEntity(currentIndex);
  makeActive(currentIndex);
})

//Точка и Ссылка
for (let i = 0; i <= entities.length - 1; i++) {
  entities[i].dot.addEventListener('click', () => {
    pressOnElement(i);
  });
  entities[i].line.addEventListener('click', () => {
    pressOnElement(i);
  });
}