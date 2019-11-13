import './input-error.pcss';

class InputError {
    constructor(block){
        this.block = block;

        this.el = {
            input: this.block.querySelector('input'),
            select: this.block.querySelector('select'),
            errorText: this.block.querySelector('.input-error__text'),
            icon: this.block.querySelector('.icon-date')
        };

        if(this.el.select !== null){
            this.el.select.addEventListener('blur', () => this.errorSelect());
        }else if(this.el.input !== null){
            this.el.input.addEventListener('blur', () => this.errorInput());
        }
    }

    errorSelect(){
        if(this.el.select.value.length === 0 || this.block.Format.format(this.el.select) !== true){
            this.el.select.classList.add('error');
            this.el.select.style.marginBottom = '30px';
            this.el.errorText.classList.remove('hidden');
        }else{
            this.el.select.classList.remove('error');
            this.el.select.style.marginBottom = '0';
            this.el.errorText.classList.add('hidden');
        }
    }

    errorInput(){
        if(this.el.input.value.length === 0 || this.block.Format.format(this.el.input) !== true){
            this.el.input.classList.add('error');
            this.el.input.style.marginBottom = '30px';
            this.el.errorText.classList.remove('hidden');
            if(this.el.icon !== null){
                this.el.icon.classList.add('hidden');
            }
        }else{
            this.el.input.classList.remove('error');
            this.el.input.style.marginBottom = '0';
            this.el.errorText.classList.add('hidden');
            if(this.el.icon !== null){
                this.el.icon.classList.remove('hidden');
            }
        }
    }

}

Layout.add('.input-error', InputError);