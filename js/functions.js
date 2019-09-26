$(window).load(function() {
	$('.flexslider').flexslider({
		animation: "fade",
	    start: function (slider) {
	    	$('.content-slide input').change(function(event){
	        	$('.flexslider').flexslider('next')
	    	})
	  	}
	})
});

$(document).ready(function(){
	$("#container-video").fitVids();
});
