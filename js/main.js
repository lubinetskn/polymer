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

$('body').on('click', '.trans-link', function(event) {
  event.preventDefault();
  var id = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({ scrollTop: top - 30 }, 1500);
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

$('.input__field').focusout(function() {
  if ($(this).val() != '') {
    $(this).parent().addClass('input--filled');
  }
});

$(document).ready(function() {
  $('.title--red').addClass('animated fadeInLeftBig');
  $('.title--gray').addClass('animated fadeInRightBig');
  setTimeout(function() {
        $('#home .btn').addClass('animated fadeIn');
    }, 1000);
});
var products = 0;
$(window).scroll(function () {
  if ($(document).scrollTop() > 10) {
    if (products != 1) {
    $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
  });
  setTimeout(function() {
        $('#products .btn').addClass('animated fadeIn');
    }, 1800);
}
  products = 1;
  }
});
