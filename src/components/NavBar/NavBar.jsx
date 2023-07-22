import "./nav.css";
import logo from "./assets/logo.webp";
import CartWidget from "../CartWidget/CartWidget.js";
import { Link } from "react-router-dom";

const NavBar = () => 
    {
        return (
//            <h1 className="h1">La Ferretería</h1>
            <div className="navegacion">
            <img className="imagen" src={logo} alt="Logo ferreteria"></img>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className="">Agua</Link>
                        </li>
                        <li>
                            <Link to="/" className="">Herramienta</Link>
                        </li>
                        <li>
                            <Link to="/" className="">Electricidad</Link>
                        </li>
                        <li>
                            <Link to="/" className="">Gas</Link>
                        </li>
                        <li>
                            <Link to="/" className="">Pintura</Link>
                        </li>

                    </ul>
                        <CartWidget />
                    
                </nav>
                </div>
            );
    }
  
export default NavBar;