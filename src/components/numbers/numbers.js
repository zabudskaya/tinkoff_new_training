import './numbers.pcss';

class Filter {
    constructor(block) {
        this.block = block;

        this.el = {
            filterNumber: this.block.querySelector('.numbers-filter__input'),
            filterPrice: this.block.querySelector('.numbers-filter__select'),
            numbers: this.block.querySelectorAll('.numbers-list__item')
        };

        this.el.filterNumber.addEventListener('change', () => this.filterNumber());
        this.el.filterPrice.addEventListener('change', () => this.filterNumber());
    }

    filterNumber() {
        this.el.numbers.forEach(item => {
            //находим сам номер телефона и оставляем только цифры
            const value = item.dataset.value.replace(/[^0-9]/g, '');
            //преобразуем номер в массив, чтобы подкорректировать его
            const array = Array.from(value);
            //удаляем первые 4 символа (7995)
            array.splice(0, 4);
            //возвращаем обратно в строку
            const str = array.join('');
            //с помощью метода match находим массив совпадений.
            //RegExp создаёт объект регулярного выражения для сопоставления текста с шаблоном
            const result = str.match(new RegExp(this.el.filterNumber.value));

            //цена номер, написанная в контейнере номера
            const numberPrice = item.querySelector('.numbers-list__price').innerHTML;
            //цена, находящаяся в инпуте "Стоимость"
            const resultPrice = numberPrice === this.el.filterPrice.value;
            if (
                result && ((this.el.filterPrice.value && resultPrice) || !this.el.filterPrice.value) ) {
                item.classList.remove('numbers-list__item_hidden');
            } else {
                item.classList.add('numbers-list__item_hidden');
            }
        });
    }
}

Layout.add('.numbers', Filter);
