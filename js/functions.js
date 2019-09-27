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
	$('.enviar-btn').click(function(){
		if($('#enigma').val() == 'caixabank'){
			$('.message-wrong').removeClass('visible');
			$('.message-ok').addClass('visible');
		}else{
			$('.message-wrong').addClass('visible');
			$('.message-ok').removeClass('visible');
		}
	})
});
