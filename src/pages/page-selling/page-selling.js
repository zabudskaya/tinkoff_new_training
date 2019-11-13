const template = require('./page-selling.twig');
const data = require('../data');

module.exports = template({
  ...data,
  content: {
    steps: [
      {
        name: 'Дозвонились',
        link: './ringup.html'
      },
      {
        name: 'Продажа',
        link: '/das',
        active: true
      },
      {
        name: 'Номер',
        link: '/das'
      },
      {
        name: 'ФИО',
        link: '/das'
      },
      {
        name: 'Встреча',
        link: '/das'
      },
      {
        name: 'Друзья',
        link: '/das'
      },
      {
        name: 'Завершение',
        link: '/das'
      }
    ],
    service: [
      {
        name: 'Мессенджеры за 49₽',
        img: 'img/messenger.jpeg'
      },
      {
        name: 'Музыка за 59₽',
        img: 'img/music.jpeg'
      },
      {
        name: 'Социальные сети за 59₽',
        img: 'img/social.jpeg'
      },
      {
        name: 'Видео за 159₽',
        img: 'img/video.jpeg'
      },
      {
        name: 'Безлимитные СМС за 49₽',
        img: '',
        large: true
      }
    ]
  }
});