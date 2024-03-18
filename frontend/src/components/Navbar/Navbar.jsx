import "./Navbar.css";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
      <Link style={{textDecoration: 'none'}} to="/"><img src={logo} alt="" style={{ width:"200px", height: "100px" }} /></Link>
      
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{textDecoration: 'none'}}  to="/">Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link style={{textDecoration: 'none'}} to="/">Men</Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link style={{textDecoration: 'none'}} to="/">Women</Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kid");
          }}
        >
          <Link style={{textDecoration: 'none'}} to="/">Kid</Link>
          {menu === "kid" ? <hr /> : <></>}
        </li>
      </ul>


      <div className="nav-login-cart">
        
          <Link style={{textDecoration: 'none'}} to="/login"><button>Login</button></Link>
        
          <Link style={{textDecoration: 'none'}} to="/cart"><img src={cart} alt="" style={{ width: "auto", height: "25px" }} /></Link>
        <div className="nav-item-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
