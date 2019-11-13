const template = require('./not-take.twig');
const data = require('../data');

module.exports = template({
  ...data,
  content: {

  }
});