import "./NavBar.css";
import logo from "./assets/logo.webp";
import { Link } from "react-router-dom";

export default function NavBar() { 
        return (
            <div className="navegacion">
                <nav>
                    <ul className="ul">
                        <li>
                            <Link><img className="imagen" src={logo} alt="Logo ferreteria"></img></Link>
                        </li>
                        <li>
                            <Link to="/categoria/Agua" className="link">Agua</Link>
                        </li>
                        <li>
                            <Link to="/categoria/Herramienta" className="link">Herramienta</Link>
                        </li>
                        <li>
                            <Link to="/categoria/Electricidad" className="link">Electricidad</Link>
                        </li>
                        <li>
                            <Link to="/categoria/Gas" className="link">Gas</Link>
                        </li>
                        <li>
                            <Link to="/categoria/Pintura" className="link">Pintura</Link>
                        </li>
                    {/* CartWidget*/}
                    <div>🛒</div>
                    </ul>
                </nav>
                </div>
            );
    }
  