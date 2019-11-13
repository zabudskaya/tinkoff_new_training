const template = require('./page-know-client.twig');
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
                name: 'Ответил кто-то другой',
                link: '/das',
                active: true
            }
        ]
    }
});