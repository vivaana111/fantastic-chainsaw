//Create a reference for canvas
canvas = document.getElementById('myCanvas') ;
ctx = cnvas.getContext("2d") ;

//Give specific height and width to the car image
greencar_height = 100 ;
greencar_width = 75 ;


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x ="5" ;
greencar_y ="225" ;

function add() {
	//upload car, and background images on the canvas.
	background_ImgTag = newImage() ;
	background_ImgTag.onload = uploadBackground;
	background_imgTag.src = background_image ;

	greencar_ImgTag = newImage() ;
	greencar_ImgTag.onload = uploadgreencar;
	greencar_ImgTag.src = greencar_image ;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_ImgTag, 0 , 0 , canvas.width , canvas.height)

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_ImgTag, greencar_x ,greencar_y , greencar_height ,greencar_width )
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
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
		
		
}

function up()
{
	//Define function to move the car upward
	greencar_y = greencar_y + block_image_height ;
			console.log("block_image_height = " + block_image_width);
			console.log ("When left arrow key is pressed, x = '+ ball +' , Y= '") ;
			}
	
		

function down()
{
	//Define function to move the car downward
	{
		if(greencar_y <=450)
		greencar_y = greencar_y + block_image_height ;
		console.log("block_image_height = " + block_image_width);
		console.log ("When down arrow key is pressed, x = '+ ball +' , Y= '") ;
		}
}

function left()
{
	//Define function to move the car left side
	function left()
	{
		if(greencar_x >5)
		{
			{
				greencar_x = greencar_x + block_image_width ;
				console.log("block_image_height = " + block_image_width);
				console.log ("When left arrow key is pressed, x = '+ ball +' , Y= '") ;
				}
			
		}
	}
}

function right()
{
	//Define function to move the car right side
	function right()
	{
		if(greencar_x <=1050)
		{
			greencar_x = greencar_x + block_image_width ;
				console.log("block_image_height = " + block_image_width);
				console.log ("When left arrow key is pressed, x = '+ ball +' , Y= '") ;
				} 
			}		
		
}
