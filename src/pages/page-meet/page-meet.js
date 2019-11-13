const template = require('./page-meet.twig');
const data = require('../data');

module.exports = template({
  ...data,
  content: {
    steps: [
      {
        name: 'Дозвонились',
        link: '/das'
      },
      {
        name: 'Продажа',
        link: '/das'
      },
      {
        name: 'Номер',
        link: '/das'
      },
      {
        name: 'ФИО',
        link: './page-name.html'
      },
      {
        name: 'Встреча',
        link: '/das',
        active: true
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
    tabs: [
      {
        name: 'На работу',
        link: '/das',
        id: 1,
        active: true
      },
      {
        name: 'Домой',
        link: '/das',
        id: 2
      },
      {
        name: 'Новый адрес',
        link: '/das',
        id: 3
      }
    ]
  }
});