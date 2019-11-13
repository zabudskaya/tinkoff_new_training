const template = require('./page-end.twig');
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
        link: '/das'
      },
      {
        name: 'Друзья',
        link: './page-friends.html'
      },
      {
        name: 'Завершение',
        link: '/das',
        active: true
      }
    ]
  }
});