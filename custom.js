const num1 = document.querySelector('#numero1');
const num2 = document.querySelector('#numero2');
const rango = document.querySelector('#rango');

function rangoNumeros(){
        
    let valor1 = parseInt(num1.value);
    let valor2 =parseInt(num2.value);
    let resultado=' ';
    let i;
    resultado += "<ul>";

     
      if (valor1<=valor2){
         for( i=valor1;i<=valor2;i++){
             resultado += `<li> ${i} </li>`;   
         }
      }else if (valor1>=valor2){
          for( i=valor1;i>=valor2;i--){
             resultado += `<li> ${i} </li>`;    
          }

     }rango.innerHTML =resultado;

}

