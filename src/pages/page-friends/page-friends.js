const template = require('./page-friends.twig');
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
        link: '/das'
      },
      {
        name: 'Встреча',
        link: './page-meet.html'
      },
      {
        name: 'Друзья',
        link: '/das',
        active: true
      },
      {
        name: 'Завершение',
        link: '/das'
      }
    ]
  }
});