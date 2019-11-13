import './cross.pcss';

class Cross {
    constructor(block){
        this.block = block;

        this.el = {
            input: this.block.querySelector('input'),
            select:this.block.querySelector('select'),
            label: this.block.querySelector('label'),
            cross: this.block.querySelector('.cross__item'),
            icon: this.block.querySelector('.icon-date')
        };

        if(this.el.select !== null){
            this.el.select.addEventListener('input', () => this.cross(this.el.select));
            this.el.cross.addEventListener('click', () => this.clear(this.el.select));
        }else if(this.el.input !== null){
            this.el.input.addEventListener('input', () => this.cross(this.el.input));
            this.el.cross.addEventListener('click', () => this.clear(this.el.input));

        }
    }

    cross(item){
        if(item.value.length !== 0){
            this.el.cross.classList.remove('hidden');
            if(this.el.icon !== null){
                this.el.icon.classList.add('hidden');
            }

        }else{
            this.el.cross.classList.add('hidden');
            if(this.el.icon !== null){
                this.el.icon.classList.remove('hidden');
            }

        }


    }

    clear(item){
        item.value = '';
        this.el.cross.classList.add('hidden');
        //вызывается ф-ция из сласса TextUp
        this.block.TextUp.textDown(item);
    }
}

Layout.add('.cross', Cross);