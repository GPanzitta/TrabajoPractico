function check(){
  document.getElementById('Correcta').style.display='block';
    document.getElementById('mensajes').style.display='block';
      document.getElementById('imagenes').style.display='block';
      document.getElementById('rendicion').style.display='none';
  //planteo de variables
var correctas = 0;
var respuesta = document.trivia.respuesta.value;
var respuesta_2 = document.trivia.respuesta_2.value;
var respuesta_3 = document.trivia.respuesta_3.value;
var respuesta_4 = document.trivia.respuesta_4.value;
var respuesta_5 = document.trivia.respuesta_5.value;
var respuesta_6 = document.trivia.respuesta_6.value;
//contador de respuestas correctas
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
//planteo de los gifs y mensajes al finazilar la trivia
var gifs =["img/bad.gif","img/soso.gif","img/soclose.gif","img/great.gif","img/giveup.gif"];
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
//orden de los mensajes/gifs dependiendo de que cantidad de respuestas correctas el usuario obtuvo
document.getElementById('mensajes').innerHTML=mesajes[mensajes_alerta];
document.getElementById('imagenes').src=gifs[mensajes_alerta];

}
function rendir(){
  document.getElementById('rendicion').style.display='block';
  document.getElementById('Correcta').style.display='none';
document.getElementById('mensajes').style.display='none';
document.getElementById('imagenes').style.display='none';
document.getElementById('rendicion').innerHTML="Mal ahi que te rendiste,la proxima lo vas a hacer mucho mejor";



//fondo verde a las respuestas correctas
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
//check verde a las respuestas correctas
document.getElementById('green').style.display='inline';
document.getElementById('green_2').style.display='inline';
document.getElementById('green_3').style.display='inline';
document.getElementById('green_4').style.display='inline';
document.getElementById('green_5').style.display='inline';
document.getElementById('green_6').style.display='inline';




}
