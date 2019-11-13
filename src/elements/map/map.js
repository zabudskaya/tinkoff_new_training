import './map.pcss';


class Map{
    constructor(block){
        this.block = block;
    }
    init(){
        //если уже открывали карту
        if (window.myMap) {
            //то удаляем ее
            window.myMap.destroy();
            window.myMap = null;
            this.block.classList.add('hidden')
        }else{
            window.myMap = new ymaps.Map(this.block, {
                center: [55.761832, 37.595279],
                zoom: 5
            }, {
                searchControlProvider: 'yandex#search'
            });

            this.block.classList.remove('hidden')
        }




    }
}

Layout.add('.map', Map);
