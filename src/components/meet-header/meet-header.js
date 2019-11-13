import './meet-header.pcss';

class MeetTabs{
    constructor(block){
        this.block = block;

        this.el = {
            item: this.block.querySelectorAll('.meet-header__item')
        };

        this.el.item.forEach(item => {
            item.addEventListener('click', () => this.active(item))
        });
    }

    active(item){
        this.el.item.forEach(elem => {
            if(elem === item){
                elem.classList.add('header__text_active');
            }else{
                elem.classList.remove('header__text_active');
            }
        });
    }
}

Layout.add('.appointment', MeetTabs);