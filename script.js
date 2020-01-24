(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();
var set = false;

var timer = document.getElementById("timer");

var test = 0.0001;


var porcent = document.getElementById("porcent");

var comienzo = new Date();

comienzo.setUTCFullYear(2020);
comienzo.setUTCMonth(0);
comienzo.setUTCDate(23);
comienzo.setUTCHours(23);
comienzo.setUTCMinutes(0);
comienzo.setUTCSeconds(0);
comienzo.setUTCMilliseconds(0);

var horaDelRegalo = new Date();

horaDelRegalo.setUTCFullYear(2020);
horaDelRegalo.setUTCMonth(1);
horaDelRegalo.setUTCDate(1);
horaDelRegalo.setUTCHours(22);
horaDelRegalo.setUTCMinutes(0);
horaDelRegalo.setUTCSeconds(0);
horaDelRegalo.setUTCMilliseconds(0);
var logo = document.getElementById("logo");

console.log(horaDelRegalo,comienzo)

var number = document.getElementById("number");

var coins = 0;

var darken = 1;

var from=1,to=0.5

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d")
var container = document.getElementById("container");


function resize(){
    
    
    
    var width = container.offsetWidth;
    
    
    canvas.width = width;
    canvas.height = Math.floor(width*0.2);
    
    if(set){
       draw(1);
        return
       }
    
    draw(getPercentage());
    

}
resize();


window.addEventListener("resize", resize);

function draw(percent){
     canvas.width = canvas.width;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
   
    
    
    ctx.fillStyle="grey";

    ctx.beginPath();
ctx.arc(canvas.height/2,canvas.height/2, canvas.height/2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillRect(canvas.height/2,0,canvas.width-canvas.height,canvas.height);
    ctx.beginPath();
    ctx.arc(canvas.width-canvas.height/2,canvas.height/2, canvas.height/2, 0, 2 * Math.PI);
    ctx.fill();
    
    
    
    ctx.fillStyle="green"
        
    ctx.beginPath();
    
    ctx.rect(0,0,canvas.width*percent,canvas.height);
        ctx.clip()
    
        ctx.beginPath();
ctx.arc(canvas.height/2,canvas.height/2, canvas.height/2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillRect(canvas.height/2,0,canvas.width-canvas.height,canvas.height);
    ctx.beginPath();
    ctx.arc(canvas.width-canvas.height/2,canvas.height/2, canvas.height/2, 0, 2 * Math.PI);
    ctx.fill();
    
    
}





var yeet = setInterval(update,41);



function update(){//
    
   
    

    

var porcentaje = getPercentage();
    

    if(porcentaje>=1){
        if(set){
        /*
            console.log("yeet")
            porcent.innerHTML="Ha ocurrido una excepción. Por favor, contacte con el\n técnico responsable."
            logo.src="logo-glitch.gif"
    */
            clearTimeout(yeet);
            
        }else{
           draw(1);
        set=true; 
        }
        
       }else{
        draw(getPercentage());
       }
   
    

    
    

    

    
}//

var horaActual2 = new Date();


function getPercentage(){

    var horaActual = Date.now();
    
    
    
    

var porcentaje = (horaActual-comienzo.getTime())/(horaDelRegalo.getTime()-comienzo.getTime())

var p = porcentaje*100;
    if(p>=100){p=100}

var texto = (Math.floor(p* 100) / 100)+""
    
    porcent.innerHTML = texto+"%";

return porcentaje
    
}

function updateTime(s,m,h,d){
   
    
    if(d<10){d="0"+d}
    if(h<10){h="0"+h}
    if(m<10){m="0"+m}
    if(s<10){s="0"+s}
    
    var str = d+":"+h+":"+m+":"+s;
    timer.innerHTML=str;
}