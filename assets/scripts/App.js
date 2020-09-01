var w = window.innerWidth;
var h = window.innerHeight;
var counter = 0;
var counterToReset = 120000;   // in millisecondsseconds

$(document).ready(function(){
	make_visible();
});

function make_visible(){
	$(document).click( function() {
		add_to_counter(1);

		var select = "#img-" + counter;
		var wBox = $(select).css('width');
		var hBox = $(select).css('height');
		var rX =  randomCorrected(h, hBox)
		var rY =  randomCorrected(w, wBox)
		$(select).css("top", rX);
		$(select).css("left", rY);
		$(select).css("z-index", counter);
		$(select).css("visibility", "visible");

		if (counter == 11){

			var wBox = $('#videoDefault').css('width');
			var hBox = $('#videoDefault').css('height');
			var rX =  randomCorrected(h, hBox)
			var rY =  randomCorrected(w, wBox)
			$('#videoDefault').prop("currentTime", 0);
			$('#videoDefault').css("top", rX);
			$('#videoDefault').css("left", rY);
			$('#videoDefault').css("z-index", counter);
			$('#videoDefault').css('visibility', 'visible');
			$('#videoDefault').get(0).play();

		}

		if (counter == 29){
			setTimeout(function(){

				$('img').css('visibility', 'hidden');
				$('video').css('visibility', 'hidden');
				reset_counter();

			},counterToReset)
		}

	});

}

function randomCorrected(sideWindow, sideBox){
	var corrected = sideWindow - parseInt(sideBox);
	return Math.floor(Math.random() * corrected)
}

// ADD TO COUNTER AND RESET
function add_to_counter(valueToAdd) { counter += valueToAdd; }
function reset_counter() { counter = 0; }