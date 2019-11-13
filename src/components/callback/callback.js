import  './callback.pcss'

class CallBack {
    constructor(block){
        this.block = block;

        this.el = {
            select: this.block.querySelector('.specify-number__select'),
            newNumber: this.block.querySelector('.call-back__new-number'),
            thirdPerson: this.block.querySelectorAll('.call-back__third-person')
        };

        this.el.select.addEventListener('change', () => this.switch());
    }

    switch(){
        if(this.el.select.value === 'Клиенту на новый номер'){
            this.el.newNumber.classList.remove('hidden');
            this.el.thirdPerson.forEach(item => {
                item.classList.add('hidden');
            })
        }else if(this.el.select.value === 'Третьему лицу'){
            this.el.newNumber.classList.add('hidden');
            this.el.thirdPerson.forEach(item => {
                item.classList.remove('hidden');
            })
        }else{
            this.el.newNumber.classList.add('hidden');
            this.el.thirdPerson.forEach(item => {
                item.classList.add('hidden');
            })
        }
    }
}

Layout.add('.call-back', CallBack);