class Translate {
    constructor(block){
        this.block = block;

        this.block.addEventListener('keyup', () => this.translate());
    }

    translate(){
        let value = this.block.value;

        //создаем объект для корректировки строки
        const replacer = {
            q: 'й',
            w: 'ц',
            e: 'у',
            r: 'к',
            t: 'е',
            y: 'н',
            u: 'г',
            i: 'ш',
            o: 'щ',
            p: 'з',
            '[': 'х',
            ']': 'ъ',
            a: 'ф',
            s: 'ы',
            d: 'в',
            f: 'а',
            g: 'п',
            h: 'р',
            j: 'о',
            k: 'л',
            l: 'д',
            ';': 'ж',
            "'": 'э',
            z: 'я',
            x: 'ч',
            c: 'с',
            v: 'м',
            b: 'и',
            n: 'т',
            m: 'ь',
            ',': 'б',
            '.': 'ю',
            '/': '.'
        };

        let replace;

        //создаем цикл,чтобы не потерять длину
        for (let i = 0; i < value.length; i++) {
            //проверяем, что значемние value приобразованное в нижний регистр определено
            if (replacer[value[i].toLowerCase()] !== undefined) {
                //если значение value в нижнем регистре
                if (value[i] === value[i].toLowerCase()) {
                    //то в replace записывается значение value в низнем регистре
                    replace = replacer[value[i].toLowerCase()];
                }
                // если значение value в верхнем регистре
                else if (value[i] === value[i].toUpperCase()) {
                    //то в replace записывается значение value в верхнем регистре
                    replace = replacer[value[i].toLowerCase()].toUpperCase();
                }
                // Метод replace() возвращает новую строку с сопоставлениями, заменёнными на заменитель
                this.block.value = value.replace(value[i], replace);
            }
        }
    }
}

Layout.add('.translate', Translate );