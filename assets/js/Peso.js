
 var record = document.getElementById('record');
 function Datos(peso,altura){
         this.peso = peso;
         this.altura=altura;
         this.total = function(){
          return (peso/(Math.pow(altura/100,2))).toFixed(2);
         }}

 var calculito = document.getElementById('calcula');
 calculito.onclick = function() {
   var kilos =document.getElementById('Peso').value;
   var metros=document.getElementById('Altura').value;
   var respuesta = new Datos(kilos,metros);
 if(respuesta.total()<18.50){
 return alert ("Su IMC " +respuesta.total()+" es inferior a lo normal");
 }else if(respuesta.total()<=24.90 ) {
    return alert ("Su IMC " +respuesta.total()+" es Normal");
 }else if(respuesta.total()<=29.90){
     return alert ("Su IMC " +respuesta.total()+" es Superior a lo Normal");
 }else{
   return alert ("Su IMC " +respuesta.total()+" tiene Obesidad");
 }};
