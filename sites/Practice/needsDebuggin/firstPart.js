var canvasId = document.getElementById('canvas');
var drawing = canvasId.getContext('2d');

//Drawing
//drawing.beginPath();
drawing.beginPath();
drawing.moveTo(100, 100);
drawing.lineTo(500, 500);
drawing.lineTo(800, 300);
drawing.closePath();
drawing.fill();

drawing.beginPath();
drawing.moveTo(0, 0);
drawing.lineTo(400, 400);
drawing.stroke();

//drawing rect
drawing.fillRect(300, 400, 500, 100);
drawing.strokeRect(10, 250, 150, 300);

//erasing part of the drawing
drawing.clearRect(200, 200, 500, 180);

//adding color to a rect
drawing.fillStyle = "orange";
drawing.fillRect(240, 220, 200, 200);

//adding stroke color to a rect
drawing.strokeStyle = "blue";
drawing.fillRect(300, 560, 150, 150);   
drawing.strokeRect(300, 560, 150, 150);   

//global alpha
drawing.globalAlpha = 0.5;
drawing.fillStyle = 'red';
drawing.fillRect(50, 190, 50, 50);
drawing.globalAlpha = 1;

//line width and soforth
drawing.beginPath();
drawing.moveTo(50, 100);
drawing.lineTo(90, 250);
drawing.strokeStyle = 'red';
drawing.lineWidth = '20';
drawing.lineCap = 'butt';
drawing.setLineDash([10, 10]);
drawing.stroke();

drawing.beginPath();
drawing.moveTo(150, 300);
drawing.lineTo(200, 100);
drawing.strokeStyle = 'blue';
drawing.lineCap = 'round';
drawing.lineWidth = '12';
drawing.setLineDash([5, 5]);
drawing.stroke();

//Circles and Arcs
drawing.strokeStyle = 'aqua';
drawing.beginPath();
drawing.arc(600, 450, 100, 0, 2*Math.PI, false);
drawing.setLineDash([]);
drawing.stroke();

//Line and arc!
drawing.strokeStyle = 'green';
drawing.lineCap = 'square';
drawing.lineWidth = '1';
drawing.beginPath();
drawing.moveTo(100, 100);
drawing.lineTo(250, 100);
drawing.arcTo(350, 100, 350, 250, 100);
drawing.stroke();