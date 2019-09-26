$(window).load(function() {
	$('.flexslider').flexslider({
		animation: "fade",
	    start: function (slider) {
	    	$('.content-slide .box-checkbox').click(function(event){
	        	$('.flexslider').flexslider('next')
	    	})
	  	}
	})
});

$(document).ready(function(){
	$('.box-checkbox').click(function(){
		$(this).toggleClass('checked');
	})
	$("#container-video").fitVids();
});
