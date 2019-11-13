import './header.pcss';

class Header {
    constructor(block){
        this.block = block;

        this.el = {
            items: this.block.querySelectorAll('.header__item')
        };

        this.el.items.forEach(item => {
            item.addEventListener('click', event => this.test(item, event))
        })
    }
    test(item, event) {
        if (item.id === '/das') {
            //отключает действие браузера
            event.preventDefault();
        }
    }
}

Layout.add('.header', Header);