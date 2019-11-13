const template = require('./call.twig');
const data = require('../data');

module.exports = template({
  ...data,
  content: {
    steps: [
      {
        name: 'Тинькофф мобайл',
        link: '/das',
        active: true
      }
    ]
  }
});
