const canvas=document.getElementById("canvas");
const ctx=canvas.getContext('2d');
const image= document.querySelector("img");

let dpi = window.devicePixelRatio;
let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);

canvas.setAttribute('height', style_height * dpi);
canvas.setAttribute('width', style_width * dpi);

console.log(ctx);


function draw(){
    ctx.fillStyle="white";  
    ctx.strokeStyle="white";
    ctx.font='48px serif';
   // ctx.fillText("This is a Fill", 10, 100);
    ctx.strokeText("This is a Stroke", 10, 100);
}

function drawImage()
{
    ctx.drawImage(image,0, 0);
}

function drawImageResize()
{
    ctx.drawImage(image,
         0,0,      ////where to place the image on canvas
         400,400   //hwats the resize
        );
}

function drawImageCropResize()
{
    ctx.drawImage(image, 
        50,50, //where should the grab start
        150,150, //how big of a grab
        100,100,  //where should be placed on canvas
        200,200 //scale it to the size 
        )
}

function drawRectRotate(){
//ctx.fillStyle="blue";
//ctx.rotate((Math.PI/180)*10);

ctx.fillStyle="grey";
ctx.fillRect(0, 0, 100, 100);
ctx.translate(150, 50);
ctx.rotate((Math.PI/180)*10);
ctx.fillRect(200, 0, 100, 100);


}

drawRectRotate();

