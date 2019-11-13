import './textUp.pcss';

class TextUp {
    constructor(block){
        this.block = block;

        this.el = {
            input: this.block.querySelector('input'),
            label: this.block.querySelector('label'),
            select: this.block.querySelector('select')
        };

        if(this.el.select !== null){
            this.el.select.addEventListener('input', () => this.textUp(this.el.label));
            this.el.select.addEventListener('blur', () => this.textDown(this.el.select));
        }else{
            this.el.input.addEventListener('focus', () => this.textUp(this.el.label));
            this.el.input.addEventListener('blur', () => this.textDown(this.el.input));
        }
    }

    textUp(item){
        if(item === this.el.select){
            if(this.el.select.value.length !== 0){
                item.classList.add('label-up');
            }else{
                item.classList.remove('label-up');
            }
        }else{
            item.classList.add('label-up');
        }
    }

    textDown(block){
        if(block.value.length === 0){
            this.el.label.classList.remove('label-up');
        }else{
            this.el.label.classList.add('label-up');
        }
    }

}

Layout.add('.text-up', TextUp);