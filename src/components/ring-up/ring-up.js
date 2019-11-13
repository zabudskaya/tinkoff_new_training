import './ring-up.pcss'

class RingUp {
    constructor(block){
        this.block = block;
        this.el = {
            knows: this.block.querySelector('.ring-up__knows'),
            notKnows: this.block.querySelector('.ring-up__not-knows'),
        };

    }

}

Layout.add('.ring-up', RingUp);
