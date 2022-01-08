$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

    $('.carousel').carousel({
        interval: 3000
    })

$(document).ready(function(){
    var $navegador = $('#nav');
    var previousScroll = 0;
    $(window).scroll(function(event){
       var scroll = $(this).scrollTop();
       if (scroll > previousScroll && scroll > 200){
           $navegador.addClass('bgcolor');
       } else {
           $cabecera.changeClass('bgcolor');
       }
       previousScroll = scroll;    });
 
  });
