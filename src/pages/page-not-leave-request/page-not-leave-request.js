const template = require('./page-not-leave-request.twig');
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
                name: 'Заявку не оставлял',
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