import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import Sound from '../audio/planted.mp3';

function NavSubMenu(event) {
    //Change the class on the element when clicked
    event.target.classList.toggle('active');
    //Toggle the thingy manginy for mobile !!
    document.querySelector('.mobile-menu').classList.toggle('active');
}

function Navbar() {

    //CSGO easter egg :)
    var havePlanted = false;
    const plantCode = "7553608"
        .split("");

    let keyPressed = [];
    let keyIndex = 0;

    function Reset() {
        keyPressed = [];
        keyIndex = 0;
    }

    async function PlaySound() {
        var tempBool = false;
        var test = new Audio(Sound);
        await test.play();
        //shows up twice because of react.strictmode
        alert("Bomb has been planted :) (shows up twice because of react.strictmode)");
    }   

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        if (key === plantCode[keyIndex]) {
            keyPressed.push(key);
            keyIndex++;
            console.log(keyPressed);
        } else {
            Reset();
        }    

        //If the keys that are pressed is equal to the plantCode
        if (keyPressed.join("") === plantCode.join("")) {
            if (havePlanted == false) {
                havePlanted = true;
                PlaySound();
            }
        }

    }, false);

    return (

        <>
        <nav id="nav-id">
            <div className="nav-container">
                <Link to="/" className="menu-title"><h1>Lucas Persson Öhlin</h1></Link>

                <div className="page-menu">
                    <NavLink to="/" className="page-menu-item" exact activeClassName="active-page">Home</NavLink>
                    <NavLink to="/cv" className="page-menu-item" activeClassName="active-page">CV</NavLink>
                    <NavLink to="/portfolio" className="page-menu-item" activeClassName="active-page">Portfolio</NavLink>
                    <NavLink to="/about" className="page-menu-item" activeClassName="active-page">About me</NavLink>
                    <NavLink to="/contact" className="page-menu-item" activeClassName="active-page">Contact</NavLink>
                </div>

                <div className="mobile-menu">
                    <NavLink to="/" className="mobile-menu-item" exact activeClassName="active">Home</NavLink>
                    <NavLink to="/cv" className="mobile-menu-item" activeClassName="active">CV</NavLink>
                    <NavLink to="/portfolio" className="mobile-menu-item" activeClassName="active">Portfolio</NavLink>
                    <NavLink to="/about" className="mobile-menu-item" activeClassName="active">About me</NavLink>
                    <NavLink to="/contact" className="mobile-menu-item" activeClassName="active">Contact</NavLink>
                </div>

                <button className="hamburger-menu" onClick={NavSubMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
        <div id="temp-fitter"></div>
        </>

    );

}

export default Navbar;