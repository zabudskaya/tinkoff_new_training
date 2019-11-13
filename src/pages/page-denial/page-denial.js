const template = require('./page-denial.twig');
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
        name: 'Отказ',
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