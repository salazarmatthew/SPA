import React from 'react';
// Rutas
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// Componentes compartidos
import Heroes from '../components/heroes/Heroes';
import Heroe from '../components/heroe/Heroe';

const Router = () => {
    return ( 
        <BrowserRouter>
            {/* Configuracion de rutas y paginas */}
            <Switch>
                <Route exact path="/" component={Heroes} />
                <Route exact path="/heroes" component={Heroes} />
                <Route exact path="/heroe/:nombre" component={Heroe} />
            </Switch>
        </BrowserRouter>
    );
}
 
export default Router;