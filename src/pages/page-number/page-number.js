const template = require('./page-number.twig');
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
        link: './page-selling.html'
      },
      {
        name: 'Номер',
        link: '/das',
        active: true
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
    numbers: [
      {
        number: '+7(995)884-19-44',
        price: 'Бесплатно'
      },
      {
        number: '+7(995)506-55-21',
        price: 'Бесплатно'
      },
      {
        number: '+7(995)115-46-54',
        price: '490₽'
      },
      {
        number: '+7(995)121-01-25',
        price: '490₽'
      },
      {
        number: '+7(995)882-22-60',
        price: '990₽'
      },
      {
        number: '+7(995)899-89-00',
        price: '990₽'
      }
    ]
  }
});