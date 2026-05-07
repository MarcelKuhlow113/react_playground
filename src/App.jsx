import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Product from "./components/product"


class App extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
                <Navbar/>
                <div className='product-container'>
                    <Product image="Solarstadt.png" title="Solarstadt" description="Kaufe dir eine Solarstadt"/>
                    <Product image="Kanal.jpg" title="Kanal" description="Baue einen Kanal"/>
                    <Product image="Solarthermie.jpg" title="Solarthermieanlage" description="Kaufe dir eine Solarthermieanlage"/>
                    <Product image="VertikaleFarm.jpg" title="Vertikale Farm" description="Kaufe dir eine Vertikale Farm für dein Projekt"/>
                    <Product image="Wasserstoff.jpg" title="Wasserstoff" description="Kaufe dir grünen Wasserstoff"/>
                </div>
        </React.Fragment>;
    }
}
 
export default App;