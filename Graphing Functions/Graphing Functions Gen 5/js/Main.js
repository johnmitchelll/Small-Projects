var canvas;
var canvasContext;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	canvas.width  = window.innerWidth-document.getElementById("rangeslider").offsetWidth;
	canvas.height = window.innerHeight;

	start();

	//start of program drawing
  var framesPerSecond = 60;
	setInterval(function(){update();},1000/framesPerSecond);
}

function update(){
	drawGraph();
}

function start(){
  canvasContext.translate(canvas.width/2+offX, canvas.height/2+offY);

  document.getElementById('form-function').value = "arctan(x)*10*sin(j)";

  getDomain(t);

  // parse("arccos(x)");
  // eval(outputQueue, 1);
}

