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
                        <Link to="/categoria/agua" className="navUlLilink">Agua</Link>
                    </li>
                    <li>
                        <Link to="/categoria/herramienta" className="navUlLilink">Herramienta</Link>
                    </li>
                    <li>
                        <Link to="/categoria/electricidad" className="navUlLilink">Electricidad</Link>
                    </li>
                    <li>
                        <Link to="/categoria/gas" className="navUlLilink">Gas</Link>
                    </li>
                    <li>
                        <Link to="/categoria/pintura" className="navUlLilink">Pintura</Link>
                    </li>
                <CartWidget></CartWidget>
                </ul> 
            </nav>    
            );
    }
  
