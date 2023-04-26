import React from "react";
import { BrowserRouter, Switch , Route } from "react-router-dom";

import NavbarComponent from "./components/Navbar/Navbar";
import Home from "./pages/home/Home"
import SobreMim from "./pages/sobre-mim/SobreMim";
import Contato from "./pages/contato/Contato";
import Plataformas from "./pages/plataformas/Plataformas";

function Routes(){
    return(
        <BrowserRouter>
        <NavbarComponent/>
        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/sobre-mim" component={SobreMim}/>
            <Route path="/contato" component={Contato}/>
            <Route path="/plataformas" component={Plataformas}/>
        </Switch>
        </BrowserRouter>

    )
};

export default Routes;