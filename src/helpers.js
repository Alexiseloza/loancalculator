export function calcularTotal(cantidad, plazo) {
     // Taxes Loan
     /*  money = 0 to 1000 = 25%
     1001 to 5000 = 20%
     5001 to 10000 = 15%
     + 10000 = 10%  */

     let totalCantidad;

     if(cantidad <= 1000){
          totalCantidad = cantidad * .25;
     }else if(cantidad > 1000 && cantidad <= 5000){
          totalCantidad = cantidad * .20;
     }else if( cantidad > 5000 &&  cantidad <= 10000){
           totalCantidad = cantidad * .15;
     }else{
           totalCantidad = cantidad * .10;
     }
     //console.log(totalCantidad );


     /*  financing  
          3 M =5%
          6 M = 10%
          12 M = 15%
          24 M = 20%    */

     let totalPlazo;

     switch ( plazo){
          case 3:
               totalPlazo = cantidad * .05;
               break;
          case 6:
               totalPlazo = cantidad * .10;
               break;
          case 12:
               totalPlazo = cantidad * .15;
               break;
          case 24:
               totalPlazo = cantidad * .20;
               break;
               default:
                    break;     

     }

     // console.log(totalPlazo);

 
     return cantidad + totalCantidad + totalPlazo;
}



