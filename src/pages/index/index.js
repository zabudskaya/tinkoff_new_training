const template = require('./index.twig');
const data = require('../data');

module.exports = template({
  ...data,
  light: true,
  content: {
    name: 'Продажи Тинькофф Мобайл',
    list: [
      {
        name: 'Mobile. Вход new',
        link: ''
      },
      {
        name: 'Mobile. Исход',
        link: '/call.html'
      },
      {
        name: 'Mobile. (без PDS)',
        link: ''
      },
      {
        name: 'Mobile. Новичок',
        link: ''
      },
      {
        name: 'Короткие заявки',
        link: ''
      }
    ]
  }
});
