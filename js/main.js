$('.galery').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  //variableWidth: true,
  dots: true,
  arrows: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
      },
    },
  ],
});


$("body").on("click",".trans-link",function(event){
  event.preventDefault();
  var id=$(this).attr('href'),top=$(id).offset().top;
  $('body,html').animate({scrollTop:top-30},1500);
});

ymaps.ready(function() {
  var myMap = new ymaps.Map(
      'map',
      {
        center: [55.8211652, 37.5670341],
        zoom: 11,
      },
      {
        searchControlProvider: 'yandex#search',
      },
    ),
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
    ),
    myPlacemark = new ymaps.Placemark(
      [55.9211652, 37.5270341],
      {
        hintContent: 'Производство и склад',
        balloonContent: 'Производство и склад',
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/ico-address.svg',
        // Размеры метки.
        iconImageSize: [30, 42],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38],
      },
    ),
    myPlacemarkWithContent = new ymaps.Placemark(
      [55.7634504, 37.6077992],
      {
        hintContent: 'Центральный офис',
        balloonContent: 'Центральный офис',
      //  iconContent: '12',
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'img/ico-address.svg',
        // Размеры метки.
        iconImageSize: [48, 48],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout,
      },
    );
  

  myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent);

});

$(document).ready(function() {
    $('.title--red').addClass('animated fadeInLeftBig');
    $('.title--gray').addClass('animated fadeInRightBig');
    $('.btn').addClass('animated fadeIn');
});
