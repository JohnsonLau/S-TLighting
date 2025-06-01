import React from "react";
import './Products.css';
import cna from './logos/cna.png';
import plusrite from './logos/plusrite.png';
import natura from './logos/natura.png';
import etlin from './logos/etlin.png';
import ndr from './logos/ndr.png';
import alloy from './logos/alloy.png';
import kuzco from './logos/kuzco.jpg';
import lumenstar from './logos/lumenstar.png';
import turo from './logos/turolight.png';
import luxlogic from './logos/luxlogic.png';
const Products = () => {
    return (
        
        <section id="Products">
            <h1 className="productHeader">Line Cards</h1>
         <div className='productGrid'>
                <div className="grid-item">
                    <a href="https://plusriteusa.com/" target="_blank" rel="noreferrer">
                    <img className="plusrite" src={plusrite} alt="plusrite"></img> 
                    </a>
                   
                </div>
                <div className="grid-item">
                    <a href="https://www.mynaturaled.com/index.html" target="_blank" rel="noreferrer">
                        <img className="natura" src={natura} alt='natura'></img>
                    </a>
                </div>
                <div className="grid-item">
                    <a href="https://www.cnalighting.com/" target="_blank" rel="noreferrer" >
                        <img className="logoimg" src = {cna} alt='cna'></img>
                    </a>
                </div>
                <div className="grid-item">
                    <a href="https://etlin-daniels.com/" target="_blank" rel="noreferrer">
                    <img className="etlin" src = {etlin} alt='etlin'></img>
                    </a>
                </div>
               /* <div className="grid-item">
                    <a href="https://ndrelectric.com/" target="_blank" rel="noreferrer">
                    <img className="logoimg" src = {ndr} alt='ndr'></img>
                    </a>
                </div>
                
                <div className="grid-item">
                    <a href="https://www.luxlogiclighting.com/" target="_blank" rel="noreferrer">
                        <img className="logoimg" src={luxlogic} alt='luxlogic'></img>
                    </a>
                </div>
                */
                <div className="grid-item">
                    <a href="https://lumenstarled.com/" target="_blank" rel="noreferrer">
                        <img className="logoimg" src={lumenstar} alt='lumenstar'></img>
                    </a>
                </div>
                <div className="grid-item">
                    <a href="https://kuzcolighting.com/" target="_blank" rel="noreferrer">
                        <img className="kuzco" src={kuzco} alt='kuzco'></img>
                      
                    </a>
                </div>
                <div className="grid-item">
                    <a href="https://www.alloyled.com/" target="_blank" rel="noreferrer">
                    <img className="logoimg" src={alloy} alt='alloy'></img>
                    </a>
                </div>
                <div className="grid-item">
                    <a href="https://www.turolight.com/" target="_blank" rel="noreferrer">
                        <img className="turo" src={turo} alt='turo'></img> 
                    </a>
                </div>
        </div>
        </section>
    );
}

export default Products;
