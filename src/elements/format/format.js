class Format {
    constructor(block){
        this.block = block;

        this.el = {
            input: this.block.querySelector('input'),
            select: this.block.querySelector('select')
        };
    }

    format(item){
        if(item.classList.contains('name')){
            return /[а-яА-ЯёЁ]/.test(item.value) && item.value.length >= 3;
        }else if(item.classList.contains('phone')){
            const str = item.value.split("");
            return item.value.replace(/[^0-9]/g, '').length === 11 && str[3] == 9;
        }else if(item.classList.contains('region')){
            return /[а-яА-ЯёЁ]/.test(item.value) && item.value.length >= 3;
        }else if(item.classList.contains('datepicker')){
            return /[0-9]{2}\.[0-9]{2}\.[0-9]{4}/.test(item.value);
        }
    }

}

Layout.add('.format', Format);