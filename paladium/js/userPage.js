//Карусель

//For Modal window
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
var mainModalRegisration = document.getElementsByClassName('mainModalRegisration')[0];
//open
var linkOpen = document.getElementsByClassName('enterLink')[0];
linkOpen.onclick = function(){
mainModalRegisration.style.display = "block";
};
var prinyatUchastie = document.getElementsByClassName('ecceptUchastie')[0];
prinyatUchastie.onclick = function(){
 mainModalRegisration.style.display = "block";   
}

//open
//close Закритие модального средствами кнопок
var closeModal = document.getElementsByClassName('closeModalRegistration')[0];
closeModal.onclick = function(){
mainModalRegisration.style.display = "none";
};
var closeModalByLinks = document.getElementsByClassName('close1')[0];
var closeModalByLinks1 = document.getElementsByClassName('close2')[0];

closeModalByLinks.onclick = function(){
mainModalRegisration.style.display = "none";
};
closeModalByLinks1.onclick = function(){
mainModalRegisration.style.display = "none";
};
//close Закритие модального средствами кнопок
//Закрития модального по клике в не него
var blockRegistration = document.getElementsByClassName('blockRegistration')[0];
mainModalRegisration.onclick = function(event){
    if(event.target == mainModalRegisration){
        mainModalRegisration.style.display = "none";
    }
}
//Закрития модального по клике в не него
// END Modal window
//Для выброра языка

//END Для выброра языка
//для каринок внизу
$(document).ready(function() {
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,
        
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });  
});
//ENDдля каринок внизу
//Open on youtube video настройка плагина HTML5 Lightbox
var html5lightbox_options = {
        overlaybgcolor: "#333",
        overlayopacity: "0.8",

};
//END Open on youtube video HTML5 Lightbox
//DropDown language
function myFunction() {
    document.getElementById("langDrop").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//Прячеться при убирании курсора с дроп меню выбора языка

//END Прячеться при убирании курсора с дроп меню выбора языка
//При выборе языка значение меняеться в поточном блоке
$(function(){
$('#langUk').click(function(){
$('.dropLanguage').text($('#langUk').text());
});
$('#langRu').click(function(){
$('.dropLanguage').text($('#langRu').text());
});
$('#lengEn').click(function(){
$('.dropLanguage').text($('#lengEn').text());
});
});
//При выборе языка значение меняеться в поточном блоке
// Top Menu
//Смена вида значка кнопки открыть меню
function myFunctionXchange(x) {
    x.classList.toggle("change");
}
// END Смена вида значка кнопки открыть меню
//открития и закрития меню по клику
function openMenu(){
  if($('.headerMenu').hasClass('headerMenu1')){
    $('.headerMenu').removeClass('headerMenu1');
}else {
    $('.headerMenu').addClass('headerMenu1');
}  
}

 (function($){
        $(window).on("load",function(){
            $(".headerMenu a,.scrollButton").mPageScroll2id({
                offset:0
            });
     
     });
    })(jQuery);
//END PageScroll2Id
//Scroll to top
$(window).scroll(function () {
if($(this).scrollTop () > 300) {
$('.scrollButton').fadeIn();
}else {
$('.scrollButton').fadeOut();
}
});
// END scroll to top
//UserPage
function openBlock(evt, blockname) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("blocksPersonal");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks1");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" activeBlock", "");
    }
    document.getElementById(blockname).style.display = "block";
    evt.currentTarget.className += " activeBlock";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("persDate").click();
//END UserPage
///userNickName
//on change text in h1 span class = nickName alsou it changes text in span changeNickName
$('.ChangenickName').text($('.nickName').text());
///END userNickName
//maskinput
jQuery(function($){
   $("#phoneChange").mask("(+3 80)(99) 999 - 99 - 99");
   });
//end mask input

//Bitcoin counter 
var Btcource = 11634.79;
var valute = $('#value').val(); 
var number1 = $('#number1');
var number2 = $('#number2').val();
var number11 = document.getElementById('number1');

var input = $('#number1');

  input.oninput = function() {
    document.getElementById('#number2').innerHTML = input.value;
}
//END bitcoin counter