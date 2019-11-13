import './input-address.pcss';

class Address {
    constructor(block){
        this.block = block;

        this.el = {
            placemark: this.block.querySelector('.address__placemark'),
            map: this.block.querySelector('.map')
        };

        this.el.placemark.addEventListener('click', () => this.showMap());
    }

    showMap(){
        ymaps.ready(() => this.el.map.Map.init());
    }
}

Layout.add('.address', Address);