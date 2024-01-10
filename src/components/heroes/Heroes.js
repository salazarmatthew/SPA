import React, {Fragment} from 'react';
// Componentes reutilizables
import Tarjeta from '../shared/tarjeta/Tarjeta';

const Heroes = () => {
    return (
        <Fragment>
            <h1 className="text-white">Heroes <small>Marvel y DC</small></h1>
            <hr className="bg-white"></hr>
            <div className="card-columns">
                <Tarjeta />  
            </div>
        </Fragment>
      );
}
    
export default Heroes;