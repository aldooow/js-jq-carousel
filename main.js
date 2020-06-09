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
  if($('img.active').hasClass('last')) {
      $('img.active').removeClass('active')
      $('img.first').addClass('active')

      $('i.active').removeClass('active')
      $('i.first').addClass('active')

  } else {
    $('img.active').removeClass('active').next('img').addClass('active');
    $('i.active').removeClass('active').next('i').addClass('active');
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
  if($('img.active').hasClass('first')) {
      $('img.active').removeClass('active')
      $('img.last').addClass('active')

      $('i.active').removeClass('active')
      $('i.last').addClass('active')

  } else {
    $('img.active').removeClass('active').prev('img').addClass('active');
    $('i.active').removeClass('active').prev('i').addClass('active');
  }
}
