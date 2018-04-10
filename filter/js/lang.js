function myFunctions() {
    document.getElementById("myDropdown").classList.toggle("shown");
};

$(function(){
//Прячеться при убирании курсора с дроп меню выбора языка
//end lang
$('.ruLang').click(function(){
$('.dropbtn').text($(this).text());
/*$('.dropdownСontent').slideUp();*/
$('.dropdownСontent').removeClass('shown');
});

$('.uaLang').click(function(){
$('.dropbtn').text($(this).text());
/*$('.dropdownСontent').slideUp();*/
$('.dropdownСontent').removeClass('shown');
});
/////////////



});// end jq