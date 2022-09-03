var canvas = new fabric.Canvas("myCanvas")

ballY = 0;
ballX = 0;
holeY = 400;
holeX = 800;

blockImageWidth = 5;
blockImageHeight = 5;

function loadImg(){

	fabric.Image.fromURL("golf-h.png", function (Img) {
        holeObj = Img;


        holeObj.scaleToWidth(50);
        holeObj.scaleToHeight(50);

        holeObj.set({

            top: holeY,
            left: holeX 
        });

        canvas.add(holeObj);
    })   

}

	newImage(); //fica dentro da função loadImg, entre as linhas 27 e 29 (na linha 28) 

function newImage()
{
	
	fabric.Image.fromURL("ball.png", function (Img) {
        ballObj = Img;

        ballObj.scaleToWidth(50);
        ballObj.scaleToHeight(50);

        ballObj.set({

            top: ballY,
            left: ballX 
        });

        canvas.add(ballObj);
    })   
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if ((ballX == holeX) && (ballY == holeY)) {
		
		canvas.remove(ballObj);

        console.log("Você atingiu o objetivo!!!");
		
	}
	
	else{

		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}

		document.getElementById("hd3").innerHTML = "Você atingiu o objetivo!!!"; //essa linha fica no if, abaixo do canvas.remove, console.log
		document.getElementById("myCanvas").style.borderColor = "red"; //essa linha fica no if, abaixo dessa de cima, ficam as 2 abaixo do canvas.remove, console.log

	}
}

	function right(){

		if(ballX <= 1050)
		{
			ballY = ballY + blockImageWidth; //não seria X? Para a direita usa x 
			console.log("Largura do Bloco = " + blockImageHeight); //não seria width? X é largura, usa o width
			console.log("Quando a tecla para direita for pressionada, X = " + ballX, "Y = " + ballY);
			
			canvas.remove(ballObj);
			newImage();
		}
	}
	

	function left()
	{
		if(ballX > 5)
		{
			ballX = ballX + blockImageWidth;
			console.log("Largura do Bloco = " + blockImageHeight); //a largura não seria width?
			console.log("Quando a tecla para esquerda for pressionada, X = " + ballX, "Y = " + ballY);
			
			canvas.remove(ballObj);
			newImage();
		}
	}

	function down()
	{
		if (ballY >= 450) { //o down vai para baixo, então usa <=450
        
			ballY = ballY + blockImageHeight;
			console.log("Altura do Bloco = " + blockImageHeight);
			console.log("Quando a tecla para baixo for pressionada, X = " + ballX, "Y = " + ballY);
			
			canvas.remove(ballObj);
			newImage();
	}
}
	
	function up()
	{
		if (ballY >= 0) { 
        
			ballY = ballY - blockImageHeight;
			console.log("Altura do Bloco = " + blockImageHeight);
			console.log("Quando a tecla para cima for pressionada, X = " + ballX, "Y = " + ballY);
			
			canvas.remove(playerObject);
			newImage();
	}
}
