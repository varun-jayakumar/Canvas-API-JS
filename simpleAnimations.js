const canvas=document.getElementById("canvas");
const ctx=canvas.getContext('2d');
let dpi = window.devicePixelRatio;
let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
const image=new Image();
image.src='assets/backDrop.jpg';
canvas.setAttribute('height', style_height * dpi);
canvas.setAttribute('width', style_width * dpi);

console.log(ctx);


function drawText(){
   
    //fill style 
    ctx.fillStyle="blue";  

    //stroke style
    ctx.strokeStyle="white";

    //font size and style
    ctx.font='48px serif';

    //render fill text
    ctx.fillText("This is a Fill", 10, 100);

    //render stroke text
    ctx.strokeText("This is a Stroke", 400, 100);
}


function drawOnImage() {
    const ctx = document.getElementById('canvas').getContext('2d');
    //Creating new HTMLImageElement 
    const img = new Image();
    img.src = 'assets/backDrop.jpg';
    //when Image is loaded execute the following Statements
    img.onload = () => {
    //pace the image on canvas at position (x:0,y:0)
     ctx.drawImage(img, 0, 0);
     ctx.beginPath();
     //defining stroke color
     ctx.strokeStyle='red';
     //move to postion (x:30, y:96)
     ctx.moveTo(30, 96);
     //draw a line to position (x:70,y:96)
     ctx.lineTo(70, 66);
     //draw a line to position (x:70,y:96)
     ctx.lineTo(103, 76);
     //draw a line to position (x:70,y:96)
     ctx.lineTo(170, 15);
     //The lines are rendred when stroke() method is invoked
     ctx.stroke();
    }; 
  }



function drawImage()
{
    image.onload=()=>{
        ctx.drawImage(image,0, 0);
    }
    
   
}

function drawImageResize()
{
    const ctx = document.getElementById('canvas').getContext('2d');
    //Creating new HTMLImageElement 
    const img = new Image();
    img.src = 'assets/backDrop.jpg';
    //when Image is loaded execute the following Statement
    img.onload= () =>{
        ctx.drawImage(img,
            0,0,      ////where to place the image on canvas
            300,300   //Resize Width and Height
           );
    }
}

function drawImageCropResize()
{
    const ctx = document.getElementById('canvas').getContext('2d');
    //Creating new HTMLImageElement 
    const img = new Image();
    img.src = 'assets/backDrop.jpg';
    img.onload=()=>{
        ctx.drawImage(img, 
            50,50,   //where should the grab start
            150,150, //how big of a grab
            50,250, //where should the grab be placed on canvas
            150,150  //resize the grab before placing 
            ); }
}

function drawRectRotate(){
//fillStyle to white
ctx.fillStyle="white";
//canvas origin to (100,100)
ctx.translate(100,100);
//Rectangle at (x:0,y:0) of size (w:100,h:100)
ctx.fillRect(0, 0, 100, 100);
//Rotate axis by 45 degree clockwise
ctx.rotate((Math.PI/180)*45);
//fill style to red
ctx.fillStyle="red";
//Rectangle at (x:0,y:0) of size (w:100,h:100)
ctx.fillRect(0, 0, 100, 100);

}

function translateDemo(){
    //changing fill style to blue
    ctx.fillStyle="blue";
    //drawing blue Rectangle at 0,0 size (100,100)
    ctx.fillRect(0,0,100,100);
    //Moving the canvas Origin to (0,0)
    ctx.translate(300,200);
    //changing fill style to blue
    ctx.fillStyle="grey";
    //Drawing Grey rectangle at new origin
    ctx.fillRect(0,0,100,100); 
}

function scaleDemo(){
    //changing fill style to blue
    ctx.fillStyle="green";
    //render a rectangle of size (w:100, h:100) at (x:10,y:10)
    ctx.fillRect(10,10,100,100);
    //scaling the canvas (x:2, y:2)
    ctx.scale(2,2);
    //render a rectange of size (w:100,h:100) at (x:5,y:60) after scaling
    ctx.fillRect(5,60,100,100);
}









