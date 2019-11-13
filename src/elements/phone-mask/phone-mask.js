import IMask from 'imask';

class PhoneMask {
    constructor(block) {
        this.block = block;

        this.block.addEventListener('focus', () => this.mask());
        this.block.addEventListener('blur', () => this.clear());
    }

    mask() {
        IMask(this.block, {
            mask: '+{7}(000)000-00-00'
        });
    }

    clear() {
        const number = this.block.value.replace(/[^0-9]/g, '');
        if (number === '7') {
            this.block.value = '';
        }
    }
}

Layout.add('.phone', PhoneMask);
