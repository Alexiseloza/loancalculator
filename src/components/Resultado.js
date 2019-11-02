import React from 'react';

const Resultado = ({total, cantidad, plazo}) => {

     return ( 


          <div className="u-full-width resultado">
               <h3 className="textblanco">Your request is for the amount of : <span className="textored">{cantidad}</span></h3>
               <h4 className="textblanco"> The months for payment are: <span className="textored">{plazo} </span></h4>
               <br></br>
               <h3 className="textblanco">The amount to be paid is: <span className="textored">$ {total}</span></h3>
               <h2 className="textblanco">Your monthly fee is $ <span className="textored">{ (total / plazo).toFixed(3) } </span></h2>


          </div>
      );
}
 
export default Resultado;