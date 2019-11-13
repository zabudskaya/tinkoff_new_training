import './datepicker.pcss';

import Pikaday from 'pikaday';
import 'pikaday/css/pikaday.css';

class DatePicker {
    constructor(block) {
        this.block = block;

        this.block.addEventListener('keyup', () => this.format());

        this.init();
    }

    init() {
        this.pikaday = new Pikaday({
            field: this.block,
            format: 'D/M/YYYY',
            disableDayFn: function(theDate) {
                return theDate < new Date();
            },
            toString: (date, format) => {
                // you should do formatting based on the passed format,
                // but we will just return 'D/M/YYYY' for simplicity
                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();
                return [day, month, year].join('.');
            }
        });
    }

    format(){
        const value = this.block.value;
        const pattern = /[()&^$?/%#\!@;+_*=":'a-zA-Zа-яА-Я]/;

        //делаем проверку с помощью метода test
        //(выполняет поиск сопоставления)
        if(pattern.test(value)){
            //Метод replace() возвращает новую строку с сопоставлениями, заменёнными на заменитель
            this.block.value = value.replace(pattern, '');
        }
    }
}

Layout.add('.datepicker', DatePicker);
