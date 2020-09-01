var canvas = document.createElement( 'canvas' );
canvas.style.position = 'absolute';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild( canvas );

var context = canvas.getContext( '2d' );

var cwidth = 800, cwidthhalf = cwidth / 18;
var cheight = 800, cheighthalf = cheight / 18;

var particles = [];

var Particle = function ( x, y, sx, sy ) {

	if ( sx === 0 ) sx = 2;

	var cx = cwidth;
	var cy = cheight;

	this.update = function () {

		x += sx;
		y += sy;

		if ( y > canvas.height - cheighthalf ) {

			y = canvas.height - cheighthalf;
			sy = - sy * 0.85;

		}

		sy += 0.98;

		context.drawImage( image, 0, 0, cwidth*5, cheight*5, Math.floor( x - cwidthhalf ), Math.floor( y - cheighthalf ), cwidth/4, cheight/4	);

		return true;

	}

}

var image = document.createElement( 'img' );
image.src = "token.png";

var throwCard = function ( x, y ) {

	var particle = new Particle( x, y, Math.floor( Math.random() * 6 - 3 ) * 2, - Math.random() * 16 );
	particles.push( particle );

}

document.addEventListener( 'mousedown', function ( event ) {

	event.preventDefault();

	document.addEventListener( 'mousemove', onMouseMove, false );

}, false );

document.addEventListener( 'mouseup', function ( event ) {

	 var w = window.innerWidth;
	 var h = window.innerHeight;

	event.preventDefault();

	throwCard( Math.floor( Math.random() * w), Math.floor( Math.random() * h/4) );

	document.removeEventListener( 'mousemove', onMouseMove, false );

}, false );

function onMouseMove( event ) {

	event.preventDefault();

	throwCard( event.clientX, event.clientY );

}

document.addEventListener( 'touchstart', function ( event ) {

	event.preventDefault();

	for ( var i = 0; i < event.changedTouches.length; i ++ ) {

		throwCard( event.changedTouches[ 0 ].pageX, event.changedTouches[ 0 ].pageY );

	}

}, false );

document.addEventListener( 'touchmove', function ( event ) {

	event.preventDefault();

	for ( var i = 0; i < event.touches.length; i ++ ) {

		throwCard( event.touches[ i ].pageX, event.touches[ i ].pageY );

	}

}, false );

function animate() {

	var i = 0, l = particles.length;

	while ( i < l ) {

		particles[ i ].update() ? i ++ : l --;

	}
	
	requestAnimationFrame( animate );

}

requestAnimationFrame( animate );