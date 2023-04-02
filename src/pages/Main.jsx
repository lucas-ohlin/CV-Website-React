import { Link } from "react-router-dom";

// //Font awesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

//Image imorts
import icon_csharp from '../images/csharp.png';
import icon_python from '../images/python.svg';
import icon_js from '../images/js-logo.png';

import flag_swe from '../images/swedenflag.png';
import flag_eng from '../images/ukflag.png';

import cv1_eng from '../images/cv-eng-1.png';
import cv2_eng from '../images/cv-eng-2.png';
import cv1_swe from '../images/cv-1.png';
import cv2_swe from '../images/cv-2.png';

import api_emc from '../images/emcapi.png';
import api_csgo from '../images/csgoapi.png';
import api_rust from '../images/rustapi.png';

import cs_game from '../images/game.png';
import cs_bank from '../images/csharpbank.png';

import py_reader from '../images/pyreader.png';

function Main() {
    
    return (
        <>
        <div className="content-container-1">

            <div className="content-container-1-content">
                
                <div className="container-1-left">
                    <div className="text-holder">
                        <p id="info-text"><i> ‎ ‎ ‎ -  backend developer</i></p>
                        <h2>Based in Sweden 🇸🇪</h2>
                        <p>Yo👋, i'm a primarly backend developer from, and based in Sweden.<br /> 
                        I've been coding and designing applications and websites for the<br />
                        better of 6 years at this point.</p>
                    </div>
                    <div className="icon-holder">
                        <a href="https://github.com/lucas-ohlin" target="_blank">
                            <FontAwesomeIcon className="fab" icon={faGithub} />
                        </a>
                        <a href="https://www.linkedin.com/in/lucas-persson-%C3%B6hlin-39b698267/" target="_blank">
                            <FontAwesomeIcon className="fab" icon={faLinkedin} />
                        </a>
                    </div>
                </div>
                
                <div className="container-1-right">
                    <div className="image-circle"></div>
                </div>

            </div>
        </div>

        <div className="main-cv-container">
            <div className="main-cv-content">

                <div className="main-cv-content-left">
                    <Link to="/">
                        <img src={flag_eng} width="50px" height="25px"/>
                        <img src={flag_swe} id="swe-flag" width="50px" height="25px"/>
                        <img src={cv1_eng} className="main-cv-image"/>
                    </Link>
                
                    <Link to="/" id="swe-cv">
                        <img src={flag_swe} width="50px" height="25px"/>
                        <img src={cv1_swe} className="main-cv-image"/>
                    </Link>
                </div>

                <div className="main-cv-content-right">

                    <Link to="/" className="read-more-button"></Link>
                
                    <div className="text-holder">
                        <p id="info-text"><i> ‎ ‎ ‎ - cv</i></p>
                        <h2>My CV<br/></h2>
                        <p>My CV in both english for the international market 🤣,<br/> 
                        and in swedish for the people at home. 🇸🇪</p>
                    </div>
                </div>

            </div>
        </div>

        <div className="main-portfolio-container">
            <div className="main-portfolio-content">
                
                <div className="main-portfolio-content-left">

                    <Link to="/" className="read-more-button"></Link>

                    <div className="text-holder">
                        <p id="info-text"><i> ‎ ‎ ‎ - portfolio</i></p>
                        <h2>Portfolio<br/></h2>
                        <p>A library of some of my projects made in mainly,<br/> 
                        JS or C# but includes some other languages.</p>
                    </div>
                </div>

                <div className="main-portfolio-content-right">
                    <div className="block-1">
                        <div className="block-1-content">

                            <div className="block-left">
                                <Link to="/">
                                    <img src={icon_js} className="small-icon"/>
                                    <img src={api_rust} className="main-portfolio-image"/>
                                </Link>
                                <Link to="/">
                                    <img src={icon_js} className="small-icon" id="mobile-disable" />
                                    <img src={api_csgo} className="main-portfolio-image" id="mobile-disable"/>
                                </Link>
                                <Link to="/">
                                    <img src={icon_js} className="small-icon" id="third-block-img" />
                                    <img src={api_emc} className="main-portfolio-image" id="third-block-img"/>
                                </Link>
                            </div>
                            <div></div>

                        </div>
                    </div>

                    <div className="block-2" id="mobile-disable">
                        <div className="block-2-content">
                            <div></div>
                            <div className="block-right">
                                <Link to="/">
                                    <img src={icon_csharp} className="small-icon"/>
                                    <img src={cs_game} className="main-portfolio-image"/>
                                </Link>
                                <Link to="/">
                                    <img src={icon_python} className="small-icon"/>
                                    <img src={py_reader} className="main-portfolio-image"/>
                                </Link>
                                <Link to="/">
                                    <img src={icon_csharp} className="small-icon" id="third-block-img"/>
                                    <img src={cs_bank} className="main-portfolio-image" id="third-block-img"/>
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>

        <div className="aboutme-container">
            <div className="aboutme-content">

                <div className="container-1-left">
                    <div className="image-circle"></div>
                </div>

                <div className="container-1-right">
                    <div className="text-holder">
                        <p id="info-text"><i> ‎ ‎ ‎ - about me</i></p>
                        <h2>About me<br/></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                
            </div>
        </div>

        </>
    );
}

export default Main;