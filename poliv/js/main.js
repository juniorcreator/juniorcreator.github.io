$(document).ready(function(){
	
	// Grab a handle to the video
   var video = document.getElementById("video");
   // Turn off the default controls
   video.controls = false;
   //menu
   $('.button-collapse').sideNav();

	})



function togglePlayPause() {
   var playpause = document.getElementById("playpause");
   if (video.paused || video.ended) {
      video.play();
      $('#playpause').css('visibility','hidden');

   }
   else{
   	video.pause();
   }

$(function(){
  $('.video').height($('.video').width()/2.5);
  $(window).resize(function(){
    $('.video').height($('.video').width()/2.5);
  });
});
}
// open menu on click






