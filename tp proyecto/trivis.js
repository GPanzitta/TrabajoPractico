function check(){
var correctas = 0;
var respuesta = document.trivia.respuesta.value;
var respuesta_2 = document.trivia.respuesta_2.value;
var respuesta_3 = document.trivia.respuesta_3.value;
var respuesta_4 = document.trivia.respuesta_4.value;
var respuesta_5 = document.trivia.respuesta_5.value;
var respuesta_6 = document.trivia.respuesta_6.value;

if(respuesta=="correcta"){
correctas++;
}
if(respuesta_2=="correcta_2"){
correctas++;
}
if(respuesta_3=="correcta_3"){
correctas++;
}
if(respuesta_4=="correcta_4"){
correctas++;
}
if(respuesta_5=="correcta_5"){
correctas++;
}
if(respuesta_6=="correcta_6"){
correctas++;
}
if (correctas==6) {
  document.getElementById('Correcta').innerHTML= "Todas las respuestas son correctas";
}else {
  document.getElementById('Correcta').innerHTML= "Conseguiste "+correctas +"respuestas correctas ";
}
var gifs =["img/bad.gif","img/soso.gif","img/soclose.gif","img/great.gif"];
var mesajes=["Un desastre maestro","Ibas bien pero te falto un empujonsito","casi casi!!","Perfecto papa la rompiste"];
var mensajes_alerta;

if (correctas<1) {
  mensajes_alerta=0;

}
if (correctas>1 && correctas<2 || correctas==2||correctas==1) {
  mensajes_alerta=1;

}
if (correctas<5 && correctas>3||correctas==3||correctas==5) {
  mensajes_alerta=2;

}
if (correctas==6) {
  mensajes_alerta=3;

}
document.getElementById('mensajes').innerHTML=mesajes[mensajes_alerta];
document.getElementById('imagenes').src=gifs[mensajes_alerta];

}
function rendir(){

var color=document.getElementById('correctaa');
color.style.background="green";
var color_2=document.getElementById('correctaaa');
color_2.style.background="green";
var color_3=document.getElementById('correctaaaa');
color_3.style.background="green";
var color_4=document.getElementById('correctaaaaa');
color_4.style.background="green";
var color_5=document.getElementById('correctaaaaaa');
color_5.style.background="green";
var color_6=document.getElementById('correctaaaaaaa');
color_6.style.background="green";


}
