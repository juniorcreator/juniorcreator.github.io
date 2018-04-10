$(document).ready(function() {
 
  $("#carousel").owlCarousel({
  	//Basic Speeds
    slideSpeed : 400,
    paginationSpeed : 800,
 
    //Autoplay
    autoPlay : false,
    goToFirst : true,
    goToFirstSpeed : 1000,
 
    // Navigation
    navigation : false,
    navigationText : ["prev","next"],
    pagination : false,
    paginationNumbers: true,
 
    // Responsive 
    responsive: true,
    items : 5,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsMobile : [479,1]
  });
 
});