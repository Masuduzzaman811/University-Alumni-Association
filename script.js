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

const speakers = [
  {
    title: 'Md Masuduzzaman',
    style: 'Country Representative at SCUT ISU',
    information: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, voluptas.',
    figure: 'image/performers/speaker1.jpg',
  },
  {
    title: 'Md Khairul Islam',
    style: 'Lectuter of Computer Science and Engineering at AIUB',
    information: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, voluptas.',
    figure: 'image/performers/speaker2.jpg',
  },
  {
    title: 'Fokirul Alagir',
    style: 'Former B.Sc. student of CST',
    information: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, voluptas.',
    figure: 'image/performers/speaker3.jpg',
  },
  {
    title: 'Muhammad Abdullah',
    style: 'Lecturer of CST at SCUT',
    information: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, voluptas.',
    figure: 'image/performers/speaker4.jpg',
  },
  {
    title: 'Romzan Ali',
    style: 'Senior software developer at brainstrom',
    information: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, voluptas.',
    figure: 'image/performers/speaker5.jpg',
  },
  {
    title: 'Muhammad Hossain',
    style: 'Web developer',
    information: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, voluptas.',
    figure: 'image/performers/speaker6.jpg',
  },
];

const performerButton = document.createElement('button');
performerButton.classList.add('performersButton');
performerButton.setAttribute('type', 'button');
performerButton.innerHTML = 'MORE <i class="fas fa-angle-down"></i>';
performerButton.addEventListener('click', () => {
  document.querySelector('.speakers-group').innerHTML = '';
  let speakersLength = speakers.length;
  for (let i = 0; i < speakersLength; i++) {
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
    performerFigure.setAttribute('src', speakers[i].figure);
    performerFigure.setAttribute('alt', 'singer_figure');
    performerInfo.classList.add('performer_info');
    performerTitle.classList.add('performer_title');
    performerTitle.textContent = speakers[i].title;
    performerStyle.classList.add('performer_style');
    performerStyle.textContent = speakers[i].style;
    performerInformation.classList.add('performer_information');
    performerInformation.textContent = speakers[i].information;
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
    performerFigure.setAttribute('src', speakers[i].figure);
    performerFigure.setAttribute('alt', 'singer_figure');
    performerInfo.classList.add('performer_info');
    performerTitle.classList.add('performer_title');
    performerTitle.textContent = speakers[i].title;
    performerStyle.classList.add('performer_style');
    performerStyle.textContent = speakers[i].style;
    performerInformation.classList.add('performer_information');
    performerInformation.textContent = speakers[i].information;
    performerImage.append(imageDots, performerFigure);
    performerInfo.append(performerTitle, performerStyle, hr, performerInformation);
    performer.append(performerImage, performerInfo);
    document.querySelector('.speakers-group').append(performer);
  }

  document.querySelector('.speakers-group').append(performerButton);
});