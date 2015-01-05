$(document).ready(function(){
	function playHadouken(){
		$('#hadouken-sound')[0].volume=0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();

	}

	$('.ryu').mouseenter(function() {

		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.ryu-ready').show();
})
	.mouseleave(function() {

		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})

	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
			.animate(
				{'left': '300px'},
				500,
				function(){
					$(this).hide();
					$(this).css('left', '-212px');
				}
				);
	})
	.mouseup(function(){
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();

	})
	
	$(document).on('keydown', function(event) {

  if ( event.which == 88 ) {
   	$('.ryu-ready').hide();
   	$('.ryu-still').hide();
   	$('.ryu-throwing').hide();
   	$('.ryu-cool').show();
  }
})
	$(document).on('keyup', function(event) {

  
   	$('.ryu-ready').hide();
   	$('.ryu-still').show();
   	$('.ryu-throwing').hide();
   	$('.ryu-cool').hide();
  
});
});

