$(document).ready(function () {

$('.next').click(function(){
  immagineProssima();
});

$('.prev').click(function(){
  immaginePrecedente();

});


});


// FUNZIONI: 'immagineProssima()'
/*Quando faccio Click su "NEXT":
  --> Nascondere IMG corrente,
  --> Far apparire IMG prossima.
  --> Colorare il NAV blu prossimo.
  ----> Quando arriva al 'Last' IMG e si fa click su "NEXT"
      --> Nascondere IMG corrente,
      --> Far apparire la 'First' IMG,
      --> Colorare il 'First' NAV blue.*/
function immagineProssima(){
  if($('.images img.active').hasClass('last')) {
      $('.images img.active').removeClass('active')
      $('.images img.first').addClass('active')

      $('.nav i.active').removeClass('active')
      $('.nav i.first').addClass('active')

  } else {
    $('img.active').removeClass('active').next('img').addClass('active');
    $('.nav i.active').removeClass('active').next('i').addClass('active');
  }
}

// FUNZIONI: 'immaginePrecedente()'
/*Quando faccio Click su "PREV":
  --> Nascondere IMG corrente,
  --> Far apparire IMG precedente,
  --> Colorare il NAV blu precedente.
  ----> Quando arriva al 'First' IMG e si fa click su "PREV"
      --> Nascondere IMG corrente,
      --> Far apparire la 'Last' IMG,
      --> Colorare il 'Last' NAV blue.*/

function immaginePrecedente() {
  if($('.images img.active').hasClass('first')) {
      $('.images img.active').removeClass('active')
      $('.images img.last').addClass('active')

      $('.nav i.active').removeClass('active')
      $('.nav i.last').addClass('active')

  } else {
    $('.images img.active').removeClass('active').prev('img').addClass('active');
    $('.nav i.active').removeClass('active').prev('i').addClass('active');
  }
}
