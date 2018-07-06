//= ../bower_components/jquery/dist/jquery.js
//= ../bower_components/bootstrap/dist/js/bootstrap.js
jQuery(document).ready(function () {


var homenyYears = $('.personalInfo_year');
var personalInfo_year_span = $('.personalInfo_year_span');
var dropdwnList = $('.personalInfo_year_list');
var imgArrow = $('.personalInfo_year_img');
var uldrpdow = $('.personalInfo_year_list ul');
var textarea = $('textarea');
var divIntextarea = $('.placeholder_position');
var links = $('.nav li a');
var anketaForm = $('.anketa_form');


// on click hide or show dropdowm list year item
homenyYears.on('click', function(){
	if(dropdwnList.is(':hidden')){
		$(this).css('border-color','orangered');
		dropdwnList.show();
		imgArrow.css('transform','rotate(180deg)');
	}else {
		$(this).css('border-color','#F2F2F2');
		dropdwnList.hide();
		imgArrow.css('transform','rotate(0deg)');
	}
});


//if click was not on current element we close the dropdwn list
$(document).mouseup(function (e){

		if (!dropdwnList.is(e.target) 
		    && dropdwnList.has(e.target).length === 0 
		    && !homenyYears.is(e.target)) {
				homenyYears.css('border-color','#F2F2F2');
				dropdwnList.hide();
				imgArrow.css('transform','rotate(0deg)');
		}
});

// on click current list item we take its value and put in input area insted its text
dropdwnList.on('click', 'ul li', function(){
	var thisText = $(this).text();
		personalInfo_year_span.text(thisText, function(){
		dropdwnList.hide();
		imgArrow.css('transform','rotate(0deg)');
	});

});


//textarea fix 
textarea.focus(function(){

	divIntextarea.hide();

}).blur(function(){

	if($(this).val() == ""){
		divIntextarea.show();
	}else{
		divIntextarea.hide();
	}

});

// tabs menu

links.on('click', function(e){
	e.preventDefault();
 	var thisClass = $(this).attr('class');
 	anketaForm.each(function(){
 		if($(this).hasClass(thisClass)){
 			anketaForm.hide();
 			$(this).slideDown();
 		}
 	});
 	links.removeClass('active');
	$(this).addClass('active');

 
});

links.first().one().click();

});// end Jquery







