var buttonlines = document.querySelector('.toggle-button');
var mobilemenu = document.querySelector('.mobilemenu');

buttonlines.addEventListener('click', function(){
    mobilemenu.classList.toggle("show-mobile")
});