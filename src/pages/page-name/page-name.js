const template = require('./page-name.twig');
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
        link: './page-number.html'
      },
      {
        name: 'ФИО',
        link: '/das',
        active: true
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
    ]
  }
});