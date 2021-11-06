/*Programacion de JavaScript*/
var notas = $('.sonidos');
$('.note').click(function() {
    let num = parseInt(this.id);
    notas[num].pause();
    notas[num].currentTime = 0;
    notas[num].play();
})