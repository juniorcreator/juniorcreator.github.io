//Карусель
$(document).ready(function() {
 
  $('#mainCarousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:2000,
    smartSpeed: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});//End Карусель
//Карусель страницы новостей
$('#olwPageOfNews').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    mergeFit:true,
    navText:['< предыдущая','следующая >'],
    autoplay:false,
    autoplayTimeout:2000,
    smartSpeed: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});//END Карусель страницы новостей справа
/////// Страница о компании три блока снизу
$('.ww').stop().hover(function(){
$('.whyWeParagraph').slideDown();
},function(){
$('.whyWeParagraph').slideUp();    
});//end hover

$('.ourGets').stop().hover(function(){
$('.ourGetsP').slideDown();
},function(){
$('.ourGetsP').stop().slideUp();    
});//end hover

$('.ourHistory').hover(function(){
$('.ourHistoryP').slideDown();
},function(){
$('.ourHistoryP').slideUp();    
});//end hover

//////// END Страница о компании три блока снизу
/////// Vertical carousel news

/////// END Vertical carousel news
//по клику показывает топ меню

// END по клику показывает топ меню

});//End Jquery

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdownСontent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('shown')) {
        openDropdown.classList.remove('shown');
      }
    }
  }
}
//vodeo bg
// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

//end video bg

//kartka of goods tabs
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
var defaultOpen = document.getElementsByClassName('defaulfOpen')[0];
defaultOpen.click();

// ENDkartka of goods tabs 
//menu mobile
function myFunctionMenu(x) {
    x.classList.toggle("change");
}
///menu mobile
//для меню 
function funcHideShow(){
   /*if($('.topmenuAndroid').hasClass('hiddenMenu')){
    $('.topmenuAndroid').removeClass('hiddenMenu');
   }else {
     $('.topmenuAndroid').addClass('hiddenMenu');  
   } */
   $('.topmenuAndroid nav ul').slideToggle('slow');
};
// для меню
////////// Для акардиона
$(document).ready(function() {
  //прикрепляем клик по заголовкам acc-head
    $('.acc-head').on('click', f_acc);
    $('.modelCarBottom').on('click', f_acc2);
});
 
function f_acc(){
//скрываем все кроме того, что должны открыть
  $('.acc-body').not($(this).next()).slideUp(300);
// открываем или скрываем блок под заголовком, по которому кликнули
    $(this).next().slideToggle(500);
}
function f_acc2(){
//скрываем все кроме того, что должны открыть
  $('.legendWram').not($(this).next()).slideUp(300);
// открываем или скрываем блок под заголовком, по которому кликнули
    $(this).next().slideToggle(500);
}
//// Для акардиона