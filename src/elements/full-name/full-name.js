import './full-name.pcss';

class Name {
    constructor(block){
        this.block = block;

        this.el = {
            input: this.block.querySelector('input')
        };

        this.el.input.addEventListener('keyup', () => this.format());
    }

    format(){
        const value = this.el.input.value;
        const pattern = /[()&^$?/%#\!@;+_*=":'0-9]/;
        //делаем проверку с помощью метода test
        //(выполняет поиск сопоставления)
        if(pattern.test(value)){
            //Метод replace() возвращает новую строку с сопоставлениями, заменёнными на заменитель
            this.el.input.value = value.replace(pattern, '');
        }
    }

}
Layout.add('.full-name__item', Name);