import './phone-number.pcss';

class Number{
    constructor(block){
        this.block = block;

        this.el = {
            transferNumber: this.block.querySelector('#number-transfer'),
            saveNumber: this.block.querySelector('#get-new'),
            transfer: this.block.querySelector('.number__transfer'),
            thisNumber: this.block.querySelector('#current-issue'),
            otherNumber: this.block.querySelector('#another-number'),
            otherNumberInput: this.block.querySelector('.number__other-number'),
            newNumber: this.block.querySelector('.number__new-number'),
            buttons: this.block.querySelector('.number__buttons'),

        };
        this.el.transferNumber.addEventListener('click', () => this.transfer());
        this.el.saveNumber.addEventListener('click', () => this.new());
        this.el.thisNumber.addEventListener('click', () => this.thisNumber());
        this.el.otherNumber.addEventListener('click', () => this.otherNumber());
    }

    transfer(){
        if(this.el.transferNumber.checked){
            this.el.transfer.classList.remove('hidden');
            this.el.newNumber.classList.add('hidden');
            if(this.el.thisNumber.checked || this.el.otherNumber.checked){
                this.el.buttons.classList.remove('hidden');
                if(this.el.otherNumber.checked){
                    this.el.otherNumberInput.classList.remove('hidden');
                }
            }else{
                this.el.buttons.classList.add('hidden');
            }

        }
    }

    new(){
        if(this.el.saveNumber.checked){
            this.el.transfer.classList.add('hidden');
            this.el.newNumber.classList.remove('hidden');
            this.el.buttons.classList.remove('hidden');
            this.el.otherNumberInput.classList.add('hidden');
        }
    }

    thisNumber(){
        if(this.el.thisNumber.checked){
            this.el.otherNumberInput.classList.add('hidden');
            this.el.buttons.classList.remove('hidden');
        }
    }

    otherNumber(){
        if(this.el.otherNumber.checked){
            this.el.otherNumberInput.classList.remove('hidden');
            this.el.buttons.classList.remove('hidden');
        }
    }
}

Layout.add('.number', Number);