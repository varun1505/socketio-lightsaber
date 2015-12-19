$(document).ready(function(){

	var width = window.innerWidth;
	var height = window.innerHeight;

	$('#saber').css('left', (width / 2) + 'px' );
	$('#saber').css('top', (height - 50) + 'px' );

	if (window.DeviceOrientationEvent) {
		window.addEventListener('deviceorientation', function(eventData){

			// gamma is the left-to-right tilt in degrees, where right is positive
			//tiltLR = eventData.gamma;

			// beta is the front-to-back tilt in degrees, where front is positive
			//tiltFB = eventData.beta;

			// alpha is the compass direction the device is facing in degrees
			dir = eventData.alpha;

			data.x = eventData.gamma;
			data.y = 0;
			data.z = 0;

			socket.emit('send', data);		


		}, false);
	}




	var data = {};
	
	var socket = io.connect('http://192.168.1.129:3700');
	socket.on('notif', function(data){
		$('#saber').rotate(data.x);
		/*tiltLR = data.x;
		tiltFB = data.y;
		dir = data.z;*/
	});

});