import './filled.pcss';


class Filled {
    constructor(block){
        this.block = block;

        this.el = {
            filled: this.block.querySelector('.filled__item'),
            input: this.block.querySelector('input'),
            select: this.block.querySelector('select'),
            cross: this.block.querySelector('.cross__item')
        };

        if(this.el.select !== null){
            this.el.select.addEventListener('blur', () => this.filled(this.el.select));
        }else{
            this.el.input.addEventListener('blur', () => this.filled(this.el.input));
        }
    }

    filled(item){
        if(this.block.Format.format(item) === true){
            this.el.filled.classList.remove('hidden');
            this.el.cross.classList.add('hidden');
        }
    }
}

Layout.add('.filled', Filled);