const navUlmobile = document.querySelector('.navUl-mobile');
const navLinkMobiles = document.querySelectorAll('.navLinkMobile');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuBar = document.querySelector('.menuBar');

closeIcon.style.display = 'none';
function toggleMenu() {
  if (navUlmobile.classList.contains('showNavUlMobile')) {
    navUlmobile.classList.remove('showNavUlMobile');
    closeIcon.style.display = 'none';
    menuBar.style.display = 'block';
  } else {
    navUlmobile.classList.add('showNavUlMobile');
    closeIcon.style.display = 'block';
    closeIcon.style.color = 'gray';
    hamburger.style.background = 'none';
    menuBar.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

navLinkMobiles.forEach(
  (navLinkMobile) => {
    navLinkMobile.addEventListener('click', toggleMenu);
  },
);

// mobile menu End

const stagePerformer = [
  {
    title: 'Silsila Qawaali Band',
    style: 'Qawali',
    information: 'Sissila is the very first qawaali band of Dhaka University. They are performing in the university campus for the last 3 years',
    figure: 'image/performers/performer1.jpg',
  },
  {
    title: ' Sheikh Fahim Faisal',
    style: 'Sufi',
    information: 'Prominent vandari and sufi singer of Bangladesh. He is a national level singer in several media and many sufi khankas',
    figure: 'image/performers/performer2.jpg',
  },
  {
    title: 'Nadim Qawaal',
    style: 'Qawali',
    information: 'Oldest qawaali group of Bangladesh. They are performing qawaali for the last 100 years in the sub continent.',
    figure: 'image/performers/performer3.jpg',
  },
  {
    title: 'Shahbazi Brothers',
    style: 'Vandari',
    information: 'Shahbazi brothers are singers and poets. They have a powerful cultural tradition in their family for decades.',
    figure: 'image/performers/performer4.jpg',
  },
  {
    title: 'Rumi Group',
    style: 'Dance',
    information: 'Run by the Shahbaz foundation. They have proved themselves as the finest rumi dancers of Bangladesh. lorem',
    figure: 'image/performers/performer5.jpg',
  },
  {
    title: 'Muhammad Hossain',
    style: 'Devotional',
    information: 'Dhaka based Poet and cultural activist of Bangladesh. lorem ispum lorem ispum lorem ispum lorem ispum',
    figure: 'image/performers/performer6.jpg',
  },
];

const performerButton = document.createElement('button');
performerButton.classList.add('performersButton');
performerButton.setAttribute('type', 'button');
performerButton.innerHTML = 'MORE <i class="fas fa-angle-down"></i>';
performerButton.addEventListener('click', () => {
  document.querySelector('.speakers-group').innerHTML = '';
  let stagePerformerLength = stagePerformer.length;
  for (let i = 0; i < stagePerformerLength; i++) {
    const performer = document.createElement('article');
    const performerImage = document.createElement('div');
    const imageDots = document.createElement('img');
    const performerFigure = document.createElement('img');
    const performerInfo = document.createElement('div');
    const performerTitle = document.createElement('h3');
    const performerStyle = document.createElement('h4');
    const hr = document.createElement('hr');
    const performerInformation = document.createElement('p');
    performer.classList.add('performer');
    performerImage.classList.add('performerImage');
    imageDots.classList.add('performerDots');
    imageDots.setAttribute('src', 'image/dotBackground.jpg');
    imageDots.setAttribute('alt', 'dots');
    performerFigure.classList.add('performer_figure');
    performerFigure.setAttribute('src', stagePerformer[i].figure);
    performerFigure.setAttribute('alt', 'singer_figure');
    performerInfo.classList.add('performer_info');
    performerTitle.classList.add('performer_title');
    performerTitle.textContent = stagePerformer[i].title;
    performerStyle.classList.add('performer_style');
    performerStyle.textContent = stagePerformer[i].style;
    performerInformation.classList.add('performer_information');
    performerInformation.textContent = stagePerformer[i].information;
    performerImage.append(imageDots, performerFigure);
    performerInfo.append(performerTitle, performerStyle, hr, performerInformation);
    performer.append(performerImage, performerInfo);
    document.querySelector('.speakers-group').append(performer);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < 2; i++) {
    const performer = document.createElement('article');
    const performerImage = document.createElement('div');
    const imageDots = document.createElement('img');
    const performerFigure = document.createElement('img');
    const performerInfo = document.createElement('div');
    const performerTitle = document.createElement('h3');
    const performerStyle = document.createElement('h4');
    const hr = document.createElement('hr');
    const performerInformation = document.createElement('p');
    performer.classList.add('performer');
    performerImage.classList.add('performerImage');
    imageDots.classList.add('performerDots');
    imageDots.setAttribute('src', 'image/dotBackground.jpg');
    imageDots.setAttribute('alt', 'dots');
    performerFigure.classList.add('performer_figure');
    performerFigure.setAttribute('src', stagePerformer[i].figure);
    performerFigure.setAttribute('alt', 'singer_figure');
    performerInfo.classList.add('performer_info');
    performerTitle.classList.add('performer_title');
    performerTitle.textContent = stagePerformer[i].title;
    performerStyle.classList.add('performer_style');
    performerStyle.textContent = stagePerformer[i].style;
    performerInformation.classList.add('performer_information');
    performerInformation.textContent = stagePerformer[i].information;
    performerImage.append(imageDots, performerFigure);
    performerInfo.append(performerTitle, performerStyle, hr, performerInformation);
    performer.append(performerImage, performerInfo);
    document.querySelector('.speakers-group').append(performer);
  }

  document.querySelector('.speakers-group').append(performerButton);
});
