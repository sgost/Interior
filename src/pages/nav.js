import React, { useState } from 'react';
import "../styles/ham.scss"
import '../styles/nav.scss'
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import fb from '../data/assets/facebook.svg'
import In from '../data/assets/instagram.svg'
import twe from '../data/assets/twitter.svg'
import pintrest from '../data/assets/pinterest.svg'

function Navbarr() {
  const [status, setStatus] = useState('close');
  return (
    <>
      <div className="nav-co">
  
        <Navbar expand="xl" collapseOnSelect={true} className="Navbar">
          <p10 id="navtitle">B.</p10>
          <Navbar.Toggle className="toggle">
            <div id="toggle" aria-controls="navbarResponsive" class="ntbtn">
              <div className="BurgerMenu__container" role="presentation" onClick={() => setStatus(status === 'open' ? 'close' : 'open')}>
                <i id="toggle_i" className={status}></i>
                <i id="toggle_i" className={status}></i>
              </div>
            </div>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarResponsive" className="navbarResponsive">
            <Nav id="nav_items">
              <Link to="/" id="navbtn2" activeClassName="nav_active">SERVICES</Link>
              <Link to="/products" id="navbtn2" activeClassName="nav_active" >PRODUCTS</Link>
              <Link to="/work" id="navbtn2" activeClassName="nav_active" >WORK</Link>
              <Link to="/contact" activeClassName="nav_active2" className="navbtn1">GET QUOTE</Link>
              <div className="nav_footer">
                <div className="nav_footer_icons">
                  <div>
                    <img src={fb} alt="icon" className="nav_main_icons" />
                  </div>
                  <div>
                    <img src={twe} alt="icon" className="nav_main_icons2" />
                  </div>
                  <div>
                    <img src={In} alt="icon" className="nav_main_icons3" />
                  </div>
                  <div>
                    <img src={pintrest} alt="icon" className="nav_main_icons4" />
                  </div>
                </div>
              </div>
              <p10 id="navtitle" className= "navtitle5">B.</p10>
            <Navbar.Toggle className="toggle toggle2">
            <div id="toggle" aria-controls="navbarResponsive" class="ntbtn">
              <div className="BurgerMenu__container" role="presentation" onClick={() => setStatus(status === 'open' ? 'close' : 'open')}>
                <i id="toggle_i" className={status}></i>
                <i id="toggle_i" className={status}></i>
              </div>
            </div>
          </Navbar.Toggle>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};
export default Navbarr;
