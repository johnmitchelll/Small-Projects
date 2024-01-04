var canvas;
var canvasContext;
var canvasOffSets;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	canvas.width  = window.innerWidth-document.getElementById("rangeslider").offsetWidth;
	canvas.height = window.innerHeight;
	canvasOffSets = document.getElementById('gameCanvas').getBoundingClientRect();

	// console.log(window.innerWidth-document.getElementById("rangeslider").offsetWidth, window.innerHeight)

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

  graphs.push(new Graph());

  getGraphs();

  // let outputQueue = parse("arctan(x)+sin(tan(x))");
  // console.log(eval(outputQueue, 3));
}

