/*var peso = document.getElementById('Peso').value;
var altura = document.getElementById('Altura').value*/

var resultado= document.getElementById('Rpta');
  resultado.onclick= function calcularIMC(peso,altura){
    var peso = document.getElementById('Peso').value;
    var altura = document.getElementById('Altura').value;
  altura = altura/100;
  altura = Math.pow(altura,2);
  var IMC =(peso/altura).toFixed(2);
  if(IMC < 18){
    alert( "Tu IMC es " + IMC + " :Peso bajo. Necesario valorar signos de desnutrición");
  }
  if( 18 <= IMC && IMC <= 24.9){
    alert( "Tu IMC es " + IMC + " :Normal");
  }
  if(25 <= IMC && IMC <= 26.9){
    alert( "Tu IMC es " + IMC + " :Sobrepeso");
  }
  if(IMC >= 27 && IMC <= 29.9){
   alert("Tu IMC es " + IMC +'  :Obesidad grado I (Riesgo relativo "alto" para desarrollar enfermedades cardiovasculares)');
  }
  if( 30 <= IMC && IMC <= 39.9){
    alert( "Tu IMC es " + IMC + ' :Obesidad grado II (Riesgo relativo "muy alto" para el desarrollo de enfermedades cardiovasculares)');
  }
  if(40 <= IMC){
    alert( "Tu IMC es " + IMC + ' :Obesidad grado III Extrema o Mórbida (Riesgo relativo "extremadamente alto" para el desarrollo de enfermedades cardiovasculares)');
  }

};
