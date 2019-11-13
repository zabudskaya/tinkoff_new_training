import './selling.pcss'

class Selling {
    constructor(block){
        this.block = block;

        this.el = {
            haveGradio: this.block.querySelector('#three-g'),
            haveG: this.block.querySelector('.selling__three-g'),
            blockHave: this.block.querySelector('.selling__block-have-g'),
            noneGradio: this.block.querySelector('#none-g'),
            noneG: this.block.querySelector('.selling__none-g'),
            blockNone: this.block.querySelector('.selling__block-none-g'),
        };

        this.el.haveG.addEventListener('click', () => this.blockHave());
        this.el.noneG.addEventListener('click', () => this.blockNone());

    }
    blockHave(){
        if(this.el.haveGradio.checked){
            this.el.blockHave.classList.remove('hidden');
            this.el.blockNone.classList.add('hidden');
        }
    }

    blockNone(){
        if(this.el.noneGradio.checked){
            this.el.blockHave.classList.add('hidden');
            this.el.blockNone.classList.remove('hidden');
        }
    }

}

Layout.add('.selling', Selling);