import React, { Component } from 'react';

class Formulario extends Component {
     state = { 
          cantidad: '',
          plazo:''
      }
     calcularPrestamo = (e) => {
          e.preventDefault();

          const {cantidad, plazo } = this.state;
          this.props.datosPrestamo(cantidad, plazo);
     }
      updateState = (e) =>{
           //console.log(e.target.value);
           
           const {name, value} = e.target;

           this.setState({
               [name] : Number(value)
           })
           
      }

     
     
     render() { 

          const {cantidad} = this.state;

          return ( 

               <form onSubmit={this.calcularPrestamo} >
                    <div>
                         <label className=" text-white ">Amount to request <span className="textored">$ {cantidad}</span></label>
                         <input
                         onChange={this.updateState}
                         type="number"
                         name="cantidad" 
                         className="u-full-width"
                         placeholder=" Example 2500"/>
                    </div>
                    <div>
                         <label className=" text-white ">Term to Pay</label>
                         <select 
                         onChange={this.updateState}
                         name="plazo" 
                         className="u-full-width" >
                                   <option >Select</option>
                                   <option value="3">3 Months</option>
                                   <option value="6">6 Months</option>
                                   <option value="12">12 Months</option>
                                   <option value="24">24 Months</option>
                         </select>
                    </div>
                    <div>
                         <input
                           type="submit"
                           value="Calculate" 
                           className="u-full-width button-primary " />
                    </div>
               </form>
           );
     }
}
 
export default Formulario;