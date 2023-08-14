import CartWidget from "./CartWidget";
import "./NavBar.css";
import logo from "./assets/logo.webp";
import { Link } from "react-router-dom";

export default function NavBar() { 
    return (
            <nav>
                <ul className="navUl">
                    <li>
                        <Link to="/"><img className="imagen" src={logo} alt="Logo ferreteria"></img></Link>
                    </li>
                    <li>
                        <Link to="/categoria/agua" className="navUlLilink"><h2>Agua</h2></Link>
                    </li>
                    <li>
                        <Link to="/categoria/herramienta" className="navUlLilink"><h2>Herramienta</h2></Link>
                    </li>
                    <li>
                        <Link to="/categoria/electricidad" className="navUlLilink"><h2>Electricidad</h2></Link>
                    </li>
                    <li>
                        <Link to="/categoria/gas" className="navUlLilink"><h2>Gas</h2></Link>
                    </li>
                    <li>
                        <Link to="/categoria/pintura" className="navUlLilink"><h2>Pintura</h2></Link>
                    </li>
                <CartWidget></CartWidget>
                </ul> 
            </nav>    
            );
    }
  
