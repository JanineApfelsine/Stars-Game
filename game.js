// answerObject = {
//     Chamäleon: '<button data-stellar-constellation="Chamäleon">Chamäleon</button>',
//     Paradiesvogel: '<button data-stellar-constellation="Paradiesvogel">Paradiesvogel</button>',
//     Pfau: '<button data-stellar-constellation="Pfau">Pfau</button>',
//     Schlange:'<button data-stellar-constellation="Schlange">Schlange</button>',
//     Schwertfisch:'<button data-stellar-constellation="Schwertfisch">Schwertfisch</button>',
//     Walfisch: '<button data-stellar-constellation="Walfisch">Walfisch</button>',
//     Schwan: '<button data-stellar-constellation="Schwan">Schwan</button>',
// }

// answerArray = Object.values(answerObject)
// console.log('answerArray', answerArray)


 // var randomIndexOne = Math.floor(Math.random() * answerArray.length) // random position in array ( _.sample )        
        // var buttonStringOne = answerArray[randomIndexOne] // <button......

        // $('.questionOne').append(buttonStringOne)

        // var randomIndexTwo = Math.floor(Math.random() * answerArray.length) // random position in array ( _.sample )
        // var buttonStringTwo = answerArray[randomIndexTwo] // <button......

        // $('.questionOne').append(buttonStringTwo)

        // $('.questionOne').append(answerObject.Schwertfisch)

        // $('.questionOne button').click(function() {            
        //     if ($(this).attr('data-stellar-constellation') === 'Schwertfisch') alert('Juhu!')
        // });


        // drawChamäleon() {
        //     this.ctx.beginPath();
        //     this.ctx.moveTo(280, 40);
        //     this.ctx.lineTo(270, 260);
        //     this.ctx.lineTo(390, 480);
        //     this.ctx.strokeStyle = 'yellow';
        //     this.ctx.stroke();
        // }
        // //2.
        // drawParadiesvogel() {
        //     this.ctx.beginPath();
        //     this.ctx.moveTo(100, 140);
        //     this.ctx.lineTo(470, 260);
        //     this.ctx.lineTo(500, 340);
        //     //funkelnder Stern fehlt
        //     this.ctx.strokeStyle = 'yellow';
        //     this.ctx.stroke();
        // }
        // //3.
        // drawSchwertfisch() {
        //     this.ctx.beginPath();
        //     this.ctx.moveTo(520, 160);
        //     this.ctx.lineTo(220, 360);
        //     this.ctx.lineTo(120, 360);
        //     this.ctx.lineTo(170, 460);
        //     this.ctx.lineTo(220, 360);
        //     this.ctx.strokeStyle = 'yellow';
        //     this.ctx.stroke();
        // }
        // //4,
        // drawSchwan() {
        //     this.ctx.beginPath();
        //     this.ctx.moveTo(200, 140);
        //     this.ctx.lineTo(270, 260);
        //     this.ctx.lineTo(570, 460);
        //     this.ctx.moveTo(100, 350);
        //     this.ctx.lineTo(220, 370);
        //     this.ctx.lineTo(270, 260);
        //     this.ctx.lineTo(370, 260);
        //     this.ctx.lineTo(420, 140);
        //     this.ctx.strokeStyle = 'yellow';
        //     this.ctx.stroke();
        // }
        // //5.
        // drawTukan() {
        //     this.ctx.beginPath();
        //     this.ctx.moveTo(60, 260);
        //     this.ctx.lineTo(315, 155);
        //     this.ctx.lineTo(115, 355);
        //     this.ctx.moveTo(315, 155);
        //     this.ctx.lineTo(560, 260);
        //     this.ctx.strokeStyle = 'yellow';
        //     this.ctx.stroke();
        // }
        // //6.
        // drawFliege() {
        //     this.ctx.beginPath();
        //     this.ctx.moveTo(170, 260);
        //     this.ctx.lineTo(520, 160);
        //     this.ctx.lineTo(370, 460);
        //     this.ctx.lineTo(310, 350);
        //     this.ctx.lineTo(170, 260);
        //     this.ctx.strokeStyle = 'yellow';
        //     this.ctx.stroke();
        // }
        // //7.
        // drawGiraffe() {
        //     this.ctx.beginPath();
        //     this.ctx.moveTo(60, 50);
        //     this.ctx.lineTo(420, 160);
        //     this.ctx.lineTo(220, 360);
        //     this.ctx.lineTo(60, 50);
        //     this.ctx.moveTo(220, 360);
        //     this.ctx.lineTo(565, 455);
        //     this.ctx.strokeStyle = 'yellow';
        //     this.ctx.stroke();
        // }