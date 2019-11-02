import React, { Fragment, Component} from 'react';

// css styles
import './normalize.css';
import './skeleton.css';

// Component
import Formulario from './components/Formulario';
import {calcularTotal} from './helpers';
import Resultado from './components/Resultado';
import Mensaje from './components/Mensaje';
import Footer from './components/Footer';

class  App extends Component {

  // state
  state = {
    total :'',
    cantidad: '',
    plazo :''
  }


     datosPrestamo = (cantidad, plazo) =>{
       const total = calcularTotal(cantidad, plazo);

       this.setState({
         total,
         cantidad,
         plazo
       })
  }

  render() {

    const {total, cantidad, plazo} = this.state;
    
    let component;
    if(total === ''){
      component = <Mensaje />
    }else{
      component = <Resultado 
          total ={total}
          cantidad={cantidad}
          plazo={plazo}
          />
    }

  return (
    <Fragment>

      <h1>Loan Calculator </h1>
        <div className="container">
         <Formulario
          datosPrestamo={this.datosPrestamo}
         />
          <div className="mensaje">
            {component}
          

          </div>
            
        </div>
        
    
        < Footer />
    </Fragment>

    
  );
}
}
export default App;
