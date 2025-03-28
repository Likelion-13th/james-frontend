import React from "react";
import '../styles/Header.css'
import { Link, useLocation } from "react-router-dom";

const Header = () => {
   const location = useLocation();
   const currentPage = location.pathname;
    return(
        <header className="header-container">
            <div className="header-section">
                <div className="header-logo">
                    <Link to='/'>LIKELION</Link>
                </div>
            </div>
            <div className="header-navmenu">
                <Link to='/new' className={currentPage === "/new" ? "active" : ""}>New</Link>
                <Link to='/perfume' className={currentPage === "/perfume" ? "active" : ""}>Perfume</Link>
                <Link to='/diffuser' className={currentPage === "/diffuser" ? "active" : ""}>Diffuser</Link>
                <Link to='/mypage' className={currentPage === "/mypage" ? "my-active" : ""}>Mypage</Link>
            </div>    
        </header>
    );
};

export default Header;