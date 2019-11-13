import './appointment.pcss';

class Appointment {
    constructor(block){
        this.block = block;

        this.el = {
            btnWork: document.querySelector('[data-id="1"]'),
            btnHome: document.querySelector('[data-id="2"]'),
            btnNewAddress: document.querySelector('[data-id="3"]'),
            blockWork: this.block.querySelector('.at-work'),
            blocHome: this.block.querySelector('.home'),
            blocNewAddress: this.block.querySelector('.new-address')
        };

        this.el.btnWork.addEventListener('click', () => this.work());
        this.el.btnHome.addEventListener('click', () => this.home());
        this.el.btnNewAddress.addEventListener('click', () => this.newAddress());
    }

    work(){
        this.el.blockWork.classList.remove('hidden');
        this.el.blocHome.classList.add('hidden');
        this.el.blocNewAddress.classList.add('hidden');
    }

    home(){
        this.el.blockWork.classList.add('hidden');
        this.el.blocHome.classList.remove('hidden');
        this.el.blocNewAddress.classList.add('hidden');
    }

    newAddress(){
        this.el.blockWork.classList.add('hidden');
        this.el.blocHome.classList.add('hidden');
        this.el.blocNewAddress.classList.remove('hidden');
    }
}

Layout.add('.appointment', Appointment);