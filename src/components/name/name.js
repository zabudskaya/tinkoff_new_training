import './name.pcss';

class Name {
    constructor(block) {
        this.block = block;

        this.el = {
            rus: this.block.querySelector('#nationality-yes'),
            blockRus: this.block.querySelector('.page-name__rus'),
            foreign: this.block.querySelector('#nationality-no'),
            blockForeign: this.block.querySelector('.page-name__foreign'),
            country: this.block.querySelector('.country'),
            item: this.block.querySelectorAll('.page-name__item')
        };

        this.el.blockRus.addEventListener('click', () => this.rus());
        this.el.blockForeign.addEventListener('click', () => this.foreign());
    }

    rus() {
        if (this.el.rus.checked) {
            this.el.country.classList.add('hidden');
        }
    }

    foreign() {
        if (this.el.foreign.checked) {
            this.el.country.classList.remove('hidden');
        }
    }
}

Layout.add('.page-name', Name);
