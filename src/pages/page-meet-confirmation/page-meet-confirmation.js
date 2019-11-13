const template = require('./page-meet-confirmation.twig');
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
    ]
  }
});