const canvas=document.getElementById("canvas");
//console.dir(canvas);

const ctx =canvas.getContext('2d');
//the getContext returns the 2d drawing API object
//we can modify the property to change behavior
//what is there in objects prototype is inheritance
let particleArray=[];
let hue=0;

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
window.addEventListener('resize', function (){
  canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

//ctx.fillStyle='white';
//ctx.fillRect(10,10, 100, 100);
});



//ctx.fillStyle='white';
//ctx.fillRect(10,10, 100, 100);
//(x,y,width, height)


//drawing a circle
ctx.fillStyle="white";
ctx.strokeStyle="white";
ctx.lineWidth=1;
//ctx.arc(100, 100, 50,0, Math.PI*2);
//ctx.fill();
//ctx.stroke();

const mouse = {
  x: null,
  y:null,
}

canvas.addEventListener('click',function(event){
  ctx.beginPath();
  mouse.x=event.clientX;
  mouse.y=event.clientY;
 // drawCircle();
 //ctx.clearRect(0,0, canvas.width, canvas.height);
  //particleArray=[];
  createOneParticlesSet();
  
});

canvas.addEventListener("mousemove", function(event){
  ctx.beginPath();
  mouse.x=event.clientX;
  mouse.y=event.clientY;
  //particleArray=[];
  createOneParticlesSet();
  //animate();
 
 
  //drawCircle();
})

class Particle {
  //each Particle will be circle
  constructor(){
    this.x=mouse.x;
    this.y=mouse.y;
    this.size=Math.random()*5+1;
    this.speedX=Math.random()*3 -1.5;
    this.speedY=Math.random() *3 -1.5;
    this.color='hsl('+hue+',100%, 50%)';
  }

  update(){
  this.x+=this.speedX;
  this.y+=this.speedY;
  if(this.size >0.2)
  {
    this.size=this.size-0.01;
  }
  }
  draw()
  {
    ctx.fillStyle=this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
    ctx.fill();
  }

}





//create particles 
function createParticles()
{
  for(let i=0;i<2;i++)
  {
    particleArray.push(new Particle());
  }
}

function createOneParticlesSet()
{
  for(let i=0;i<3;i++)
  {
    particleArray.push(new Particle());
  }
}

//iterate through them

function updateDrawParticles()
{
  for(let i=0;i<particleArray.length;i++)
  {
    particleArray[i].update();
    particleArray[i].draw();
  

  for(let j=i;j<particleArray.length;j++)
  {
      let distance = Math.sqrt(Math.pow((particleArray[i].x-particleArray[j].x),2) + Math.pow((particleArray[i].y-particleArray[j].y),2));
     
      if(distance<100)
      {
ctx.beginPath()
ctx.strokeStyle =particleArray[i].color;
ctx.moveTo(particleArray[i].x,particleArray[i].y);
ctx.lineTo(particleArray[j].x,particleArray[j].y);
ctx.lineWidth=particleArray[i].size/15;
ctx.stroke();
      }
  }

  if(particleArray[i].size<=0.3)
  {
    particleArray.splice(i, 1);
    i--;
  }
}
}


function animate(){
 ctx.clearRect(0,0, canvas.width, canvas.height);
 ctx.fillStyle='rgba(0,0,0,0.02)';
 ctx.fillRect(0,0,canvas.width,canvas.height);
 requestAnimationFrame(animate);
 updateDrawParticles();
hue++;

 // drawCircle();
  //class function we pass it as argument doing this will create a loop
}




let drawCircle= () =>{
 ctx.clearRect(0,0, canvas.width/2, canvas.height);
  ctx.arc(mouse.x, mouse.y, 30, 0, Math.PI*2);
  ctx.fill();
  requestAnimationFrame(drawCircle);
}



//animate();
drawCircle();
