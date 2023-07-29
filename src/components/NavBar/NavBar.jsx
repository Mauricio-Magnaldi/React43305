import "./NavBar.css";
import logo from "./assets/logo.webp";
import { Link } from "react-router-dom";

export default function NavBar() { 
        return (
            <div className="navegacion">
                <nav>
                    <ul className="ul">
                        <li>
                            <Link to="/"><img className="imagen" src={logo} alt="Logo ferreteria"></img></Link>
                        </li>
                        <li>
                            <Link to="/categoria/agua" className="link">Agua</Link>
                        </li>
                        <li>
                            <Link to="/categoria/Herramienta" className="link">Herramienta</Link>
                        </li>
                        <li>
                            <Link to="/categoria/electricidad" className="link">Electricidad</Link>
                        </li>
                        <li>
                            <Link to="/categoria/gas" className="link">Gas</Link>
                        </li>
                        <li>
                            <Link to="/categoria/pintura" className="link">Pintura</Link>
                        </li>
                    {/* CartWidget*/}
                    <div>🛒</div>
                    </ul>
                    </nav>
                </div>
            );
    }
  