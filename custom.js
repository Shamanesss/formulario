const num1 = document.querySelector('#numero1');
const num2 = document.querySelector('#numero2');
//const btnFooter =document.querySelector('#start');
const rango = document.querySelector('#rango');
//btnFooter.addEventListener('click', rangoNumeros);

function rangoNumeros(){
    console.log("hola");
    
    let valor1 = 34//parseInt(num1.value);
    let valor2 = 55//parseInt(num2.value);
    let resultado=' ';
    let i;

     
      if (valor1<=valor2){
         for( i=valor1;i<=valor2;i++){
             resultado += i+" ";
            
         }
      }else if (valor1>=valor2){
          for( i=valor1;i>=valor2;i--){
             resultado += i +" "; 
              
             
          }

     }rango.innerHTML =resultado;

}

