$(function() {
  $('.about-us-slider.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    smartSpeed: 500,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });
  $('.projects-slider.owl-carousel').owlCarousel({
    items: 4,
    loop: false,
    smartSpeed: 500,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    mouseDrag: false
  });
  $('.reviews-slider.owl-carousel').owlCarousel({
    items: 2,
    loop: true,
    smartSpeed: 500,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    margin: 140
  });
  $('.video-slider.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    smartSpeed: 500,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });
  $('.fancybox').fancybox({
    loop: true,
    buttons: ['fullScreen', 'thumbs', 'close'],
    clickContent: function(current, event) {
      return current.type === 'image' ? 'next' : false;
    },
    i18n : {
      'en' : {
        CLOSE       : 'Закрыть',
        NEXT        : 'Вперед',
        PREV        : 'Назад',
        ERROR       : 'Произошла ошибка! <br/> Попробуйте позднее.',
        PLAY_START  : 'Слайдшоу',
        PLAY_STOP   : 'Остановить',
        FULL_SCREEN : 'На весь экран',
        THUMBS      : 'Миниатюры'
      }
    }
  });
  $('.call-me').click(function(e){
    e.preventDefault();
    $('.popup-wrapper.form').fadeIn().css('display', 'flex');
  });
  $('.popup-wrapper').click(function(e){
    $(this).fadeOut();
  });
  $('.popup-wrapper .close').click(function(e){
    e.preventDefault();
    $('.popup-wrapper').fadeOut();
  });
  $('.popup-wrapper .form, .popup-wrapper .thanks').click(function(e){
    e.stopPropagation();
  });
  $('a[href^="#"]').mPageScroll2id({
    scrollEasing: 'swing',
    offset: $('.header .home .nav').height()
  });
  $('.callback').submit(function() { 
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", 
      data: th.serialize()
    }).done(function() {
      th.trigger("reset");
    });
    return false;
  });
  var navPX = $('.header .home .nav').offset().top;
  $(document).scroll(function(e){
    if ($(document).scrollTop() > navPX) {
      $('.header .home .nav').addClass('nav-fixed');
      var height = $('.header .home .nav').height();
      $('.header .home').css('padding-top', height + 'px');
    } else {
      $('.header .home .nav').removeClass('nav-fixed');
      $('.header .home').css('padding-top', 0);
    }
  });
});
