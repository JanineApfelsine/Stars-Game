

class starsCanvas {
	constructor() {
		this.canvas = $('#stars')[0];
		this.ctx = this.canvas.getContext('2d');
	}

	drawStars() {
		var imgStar = new Image();
		imgStar.src = 'images/stern.png';
		var _starsCanvas = this;
		imgStar.onload = function() {
			//1.row
			_starsCanvas.ctx.drawImage(imgStar, 50, 40, 40, 40);
			_starsCanvas.ctx.drawImage(imgStar, 150, 40, 40, 40);
			_starsCanvas.ctx.drawImage(imgStar, 250, 40, 40, 40);
			_starsCanvas.ctx.drawImage(imgStar, 350, 40, 40, 40);
			_starsCanvas.ctx.drawImage(imgStar, 450, 40, 40, 40);
			_starsCanvas.ctx.drawImage(imgStar, 550, 40, 40, 40);
			//  2.row
			_starsCanvas.ctx.drawImage(imgStar, 100, 140, 40, 40);
			_starsCanvas.ctx.drawImage(imgStar, 200, 140, 40, 40);
			_starsCanvas.ctx.drawImage(imgStar, 300, 140, 40, 40);
			_starsCanvas.ctx.drawImage(imgStar, 400, 140, 40, 40);
			_starsCanvas.ctx.drawImage(imgStar, 500, 140, 40, 40);
			//3.row
			_starsCanvas.ctx.drawImage(imgStar, 50, 240, 40, 40);
			_starsCanvas.ctx.drawImage(imgStar, 150, 240, 40, 40);
			_starsCanvas.ctx.drawImage(imgStar, 250, 240, 40, 40);
			_starsCanvas.ctx.drawImage(imgStar, 350, 240, 40, 40);
			_starsCanvas.ctx.drawImage(imgStar, 450, 240, 40, 40);
			_starsCanvas.ctx.drawImage(imgStar, 550, 240, 40, 40);
			//4.row
			_starsCanvas.ctx.drawImage(imgStar, 100, 340, 40, 40);
			_starsCanvas.ctx.drawImage(imgStar, 200, 340, 40, 40);
			_starsCanvas.ctx.drawImage(imgStar, 300, 340, 40, 40);
			_starsCanvas.ctx.drawImage(imgStar, 400, 340, 40, 40);
			_starsCanvas.ctx.drawImage(imgStar, 500, 340, 40, 40);
			//5.row
			_starsCanvas.ctx.drawImage(imgStar, 50, 440, 40, 40);
			_starsCanvas.ctx.drawImage(imgStar, 150, 440, 40, 40);
			_starsCanvas.ctx.drawImage(imgStar, 250, 440, 40, 40);
			_starsCanvas.ctx.drawImage(imgStar, 350, 440, 40, 40);
			_starsCanvas.ctx.drawImage(imgStar, 450, 440, 40, 40);
			_starsCanvas.ctx.drawImage(imgStar, 550, 440, 40, 40);
			//6.row
			_starsCanvas.ctx.drawImage(imgStar, 100, 540, 40, 40);
			_starsCanvas.ctx.drawImage(imgStar, 200, 540, 40, 40);
			_starsCanvas.ctx.drawImage(imgStar, 300, 540, 40, 40);
			_starsCanvas.ctx.drawImage(imgStar, 400, 540, 40, 40);
			_starsCanvas.ctx.drawImage(imgStar, 500, 540, 40, 40);
		};
	}



	//1.
	 drawSchwertfisch() {
            this.ctx.beginPath();
            this.ctx.moveTo(520, 160);
            this.ctx.lineTo(220, 360);
            this.ctx.lineTo(120, 360);
            this.ctx.lineTo(170, 460);
            this.ctx.lineTo(220, 360);
            this.ctx.strokeStyle = 'yellow';
            this.ctx.stroke();
        }
	//2.
	drawSchwan() {
		this.ctx.beginPath();
		this.ctx.moveTo(200, 140);
		this.ctx.lineTo(270, 260);
		this.ctx.lineTo(570, 460);
		this.ctx.moveTo(100, 350);
		this.ctx.lineTo(220, 370);
		this.ctx.lineTo(270, 260);
		this.ctx.lineTo(370, 260);
		this.ctx.lineTo(420, 140);
		this.ctx.strokeStyle = 'yellow';
		this.ctx.stroke();
	}
	
	//3.
	drawChamäleon() {
		this.ctx.beginPath();
		this.ctx.moveTo(280, 40);
		this.ctx.lineTo(270, 260);
		this.ctx.lineTo(390, 480);
		this.ctx.strokeStyle = 'yellow';
		this.ctx.stroke();
	}

	//4.
	drawParadiesvogel() {
		this.ctx.beginPath();
		this.ctx.moveTo(100, 140);
		this.ctx.lineTo(470, 260);
		this.ctx.lineTo(500, 340);
		//funkelnder Stern fehlt
		this.ctx.strokeStyle = 'yellow';
		this.ctx.stroke();
	}
	//5.
	drawTukan() {
		this.ctx.beginPath();
		this.ctx.moveTo(60, 260);
		this.ctx.lineTo(315, 155);
		this.ctx.lineTo(115, 355);
		this.ctx.moveTo(315, 155);
		this.ctx.lineTo(560, 260);
		this.ctx.strokeStyle = 'yellow';
		this.ctx.stroke();
	}
	//6.
	drawFliege() {
		this.ctx.beginPath();
		this.ctx.moveTo(170, 260);
		this.ctx.lineTo(520, 160);
		this.ctx.lineTo(370, 460);
		this.ctx.lineTo(310, 350);
		this.ctx.lineTo(170, 260);
		this.ctx.strokeStyle = 'yellow';
		this.ctx.stroke();
	}
	//7.
	drawGiraffe() {
		this.ctx.beginPath();
		this.ctx.moveTo(60, 50);
		this.ctx.lineTo(420, 160);
		this.ctx.lineTo(220, 360);
		this.ctx.lineTo(60, 50);
		this.ctx.moveTo(220, 360);
		this.ctx.lineTo(565, 455);
		this.ctx.strokeStyle = 'yellow';
		this.ctx.stroke();
	}
	//8.
	drawEinhorn() {
		this.ctx.beginPath();
		this.ctx.moveTo(270, 260);
		this.ctx.lineTo(470, 60);
		this.ctx.lineTo(570, 60);
		this.ctx.moveTo(270, 260);
		this.ctx.lineTo(520, 360);
		this.ctx.lineTo(640, 280);
		this.ctx.moveTo(270, 260);
		this.ctx.lineTo(70, 460);
		this.ctx.lineTo(320, 560);
		this.ctx.strokeStyle = 'yellow';
		this.ctx.stroke();
	}

	//9.
	drawTaube() {
		this.ctx.beginPath();
		this.ctx.moveTo(70, 60);
		this.ctx.lineTo(120, 160);
		this.ctx.lineTo(420, 360);
		this.ctx.lineTo(380, 560);
		this.ctx.moveTo(420, 360);
		this.ctx.lineTo(520, 160);
		this.ctx.lineTo(570, 260);	
		this.ctx.strokeStyle = 'yellow';
		this.ctx.stroke();
	}

	//10.
	drawPfeil() {
		this.ctx.beginPath();
		this.ctx.moveTo(50, 240);
		this.ctx.lineTo(300, 340);
		this.ctx.lineTo(400, 340);
		this.ctx.moveTo(300, 340);
		this.ctx.lineTo(500, 340);
		this.ctx.strokeStyle = 'yellow';
		this.ctx.stroke();
	}
}

var questionNumber= 1;

$(function() {
	var gameStarted = false;
    var canvas;
    
    canvas = new starsCanvas();

    drawConstellationArray = [
		canvas.drawSchwertfisch,
        canvas.drawSchwan,
        canvas.drawChamäleon,
        canvas.drawParadiesvogel,
        canvas.drawTukan,
        canvas.drawFliege,
		canvas.drawGiraffe,
		canvas.drawEinhorn,
		canvas.drawTaube,
		canvas.drawPfeil
    ];

	$('#start-game-button').click(function() {
		

		// hides the start button
		$('#start-game-button').hide();
		$('.instructions').hide();
        $('.question1').toggle();
        // canvas = new starsCanvas();

		gameStarted = true;

		canvas.drawStars();
        canvas.drawSchwertfisch()
	});

	$('.restart-game-button').click(function() {
		
		window.location.reload()
	});

	var score = 0;

	function newScore(score) {
		$('.score').html('Score:  ' + score +'/10');
	}

    var questionIndex= 0;

	// function playMusic(){
	// 	music.play();
	// }
		
    

	$('.answer').click(function(e) {
		if (questionNumber===10 && score<= 3){$('#gameEndOne').toggle()};
		if (questionNumber===10 && score<=6 && score>3){$('#gameEndTwo').toggle()};
		if (questionNumber===10 && score>6 && score<=9){$('#gameEndThree').toggle()};
		if (questionNumber===10 && score===10){$('#gameEndFour').toggle()};
		var currentAnswer = $(this);
		if (currentAnswer.hasClass('correct')) {
			alert('Juhu');
			// correctAnswer.play();
			score++;
			newScore(score);
		} else {
			alert(':-(');
		}
        questionIndex++;
		canvas.ctx.clearRect(0, 0, 600, 600);
		canvas.drawStars();
        drawConstellationArray[questionIndex].bind(canvas)();
        var currentQuestion= '.question'+questionNumber;
		$(currentQuestion).hide();
        questionNumber++;
        var nextQ= '.question'+questionNumber;
		$(nextQ).toggle();
		console.log(questionNumber)
		
	});
});
