// Istruzione:
// Lo slider prevederà due frecce che permettono di scorrere tra le immagini dello slider, sia con la freccia di destra che con quella di sinistra.
// In oltre, per scorrere le immagini, attivare anche l’uso delle frecce sinistra e destra della tastiera.


$(document).ready(function(){
  // Creiamo un evento al click: Quando clicchiamo le frecce devono scorrere le immagini.
  $('.next').click(nextArrow);
  $('.prev').click(prevArrow);
  // Quando clicchiamo le palline devono scorrere le immagini.
  $('.nav i').click(ball);
});

// Funzione riferita alle palline del nav.
function ball(){
  // Creiamo una variabile che indica la condizione inziale della pallina con l'active.
  var pallinoActive = $('.active');
  // Togliamo l'active dal pallino in cui si trova inizialmente.
  pallinoActive.removeClass('active');
  // Il selettore this consente di aggiungere l'active quando noi clicchiamo su un qualsiasi pallino.
  $(this).addClass('active');
  // Adesso si deve cambiare anche l'immagine quando clicchiamo il pallino. Creiamo una variabile che indica l'indice.
  var imagePosition = $(this).index();
  // Dopo che clicchiamo il pallino, diciamo che l'img deve aggiungere l'active alla stessa posizione di quella del pallino.
  $('img').eq(imagePosition).addClass('active');
}

// Funzione riferita alla freccia di destra.
function nextArrow(){
  // Utilizziamo una variabile per indicare la condizione iniziale dell'active, il quale si dovrà spostare nelle immagini successive al click.
  var immagini = $('.images img.active');
  // Dobbiamo prima togliere la classe 'active' dall'immagine iniziale e, dopo, aggiungere 'active' all'immagine successiva.
  immagini.removeClass('active');
  immagini.next().addClass('active');
  // La condizione if permette di far ritornare la classe 'active' dall'ultima immagine (last) alla prima immagine (first).
  if (immagini.hasClass('last')) {
    $('.images img.first').addClass('active');
  }
  // Adesso dobbiamo cambiare il colore dei pallini della navbar che devono diventare blu quando si clicca. Utilizziamo una variabile per indicare la condizione iniziale dell'active.
  var pallinoBlu = $('.nav i.active');
  // La classe 'active' passa dal primo pallino (first) al pallino successivo.
  pallinoBlu.removeClass('active');
  pallinoBlu.next().addClass('active');
  // if permette di far ritornare la classe 'active' dall'ultimo pallino (last) al prima pallino (first).
  if (pallinoBlu.hasClass('last')) {
    $('.nav i.first').addClass('active');
  }
}

// Funzione riferita alla freccia di sinistra.
function prevArrow() {
  var immagini = $('.images img.active');
  immagini.removeClass('active');
  immagini.prev().addClass('active');

  if (immagini.hasClass('first')) {
    $('.images img.first').removeClass('active');
    $('.images img.last').addClass('active');
  }

  var pallinoBlu = $('.nav i.active');
  pallinoBlu.removeClass('active');
  pallinoBlu.prev().addClass('active');

  if (pallinoBlu.hasClass('first')) {
    $('.nav i.first').removeClass('active');
    $('.nav i.last').addClass('active');
  }
}
