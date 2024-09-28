import './Navbar.css';
import { FaUser, FaCartArrowDown, FaTruck } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
            <div><a className="navbar-brand fs-2" href="#">Navbar</a></div>
            
            <button className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <div className="mx-auto">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                <li className="nav-item  ms-lg-4 menu-links">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item  ms-lg-4 menu-links">
            <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item  ms-lg-4 menu-links">
            <a className="nav-link active" aria-current="page" href="#">Services</a>
        </li>
        <li className="nav-item  ms-lg-4 menu-links">
            <a className="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
                </ul>
                </div>
                    
                    <div className="navbar icons">
                        <li className="nav-item">
                            <a href="" className="nav-link"><FaTruck /></a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link"><FaCartArrowDown /></a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link"><FaUser /></a>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
