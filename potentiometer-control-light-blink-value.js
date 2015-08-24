var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function() {


	var potPin = new five.Sensor({
		pin: 'A0',
		freq: 2
	});

	var led = new five.Led(3);

	setInterval(function () {

		led.blink(potPin.value);

	}.bind(this), 500);

});