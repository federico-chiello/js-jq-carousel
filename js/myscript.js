// Istruzione:
// Lo slider prevederà due frecce che permettono di scorrere tra le immagini dello slider, sia con la freccia di destra che con quella di sinistra.
// In oltre, per scorrere le immagini, attivare anche l’uso delle frecce sinistra e destra della tastiera.


$(document).ready(function(){
  // Creiamo un evento al click. Quando clicchiamo la freccia di destra devono scorrere le immagini.
  $('.next').click(nextArrow);

});



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
