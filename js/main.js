

$(document).ready(function(){
	$(".nav,.pulse-content").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$(".radio").click(function(){
		$(".radio").removeClass("radio_active");
		$(this).addClass("radio_active");
		
	});

	$(".coise").click(function(){
		$(".coise").removeClass("coise_active");
		$(this).addClass("coise_active");
		
	});
});
