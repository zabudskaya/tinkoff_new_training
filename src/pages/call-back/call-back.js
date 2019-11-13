const template = require('./call-back.twig');
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
        name: 'Перезвон',
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