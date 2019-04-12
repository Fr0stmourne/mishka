ymaps.ready(function () {
  var myMap = new ymaps.Map("interactive-map", {
      center: [59.93874335, 30.32310386],
      zoom: 17
    }, {
      searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Mishka',
      balloonContent: 'Магазин Mishka'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/icon-map-pin.svg',
      // Размеры метки.
      iconImageSize: [66, 100],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-33, -90]
    });
  myMap.geoObjects.add(myPlacemark);
});
