import "./nav.css";
import logo from "./assets/logo.webp"
import CartWidget from "../CartWidget/CartWidget.js"

const NavBar = () => 
    {
        return (
                <nav>
                    <h1 className="h1">La Ferretería</h1>
                    <div className="navegacion">
                        <img className="imagen" src={logo} alt="Logo ferreteria"></img>
                        <div className="botonDiv">
                            <button className="boton">Agua</button>
                            <button className="boton">Herramienta</button>
                            <button className="boton">Electricidad</button>
                            <button className="boton">Gas</button>
                            <button className="boton">Pintura</button>
                        </div>
                        <CartWidget />
                    </div>
                </nav>
            );
    }
  
export default NavBar;