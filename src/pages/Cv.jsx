import React, { useState, useEffect} from "react";
import axios from "axios";

//Json import
import cv_info from '../assets/cv-information.json';

//Image imorts
import cv_eng from '../images/cv-eng-1.png';
import cv_swe from '../images/cv-1.png';
import flag_eng from '../images/ukflag.png';
import flag_swe from '../images/swedenflag.png';

function Cv() {

	return (
		<>
        <div className="cv-container">
            <div className="cv-page-container">
                <div className="cv-page">
                    
                    <div className="cv-holder">
                        
                        <div className="cv-header">
                            <h1>Lucas Persson Öhlin</h1>
                            <div className="header-info">
                                <a href="tel: 073-528-02-33">073-528-02-33</a> 
                                <a href="mailto: Lucas.persson.ohlin@hotmail.com">Lucas.persson.ohlin@hotmail.com</a> 
                                <a href="https://www.google.com/maps/@57.1481549,12.2802101,20z">Kroksbergsvägen 14, Varberg</a>
                            </div>
                        </div>

                        {
                            cv_info.map(info => {
                                return(
                                    <div className="cv-header">
                                        <h1>{info.title}</h1>
                                        <p>{info.content.join('\n')}</p>
                                    </div>
                                )
                            })
                        }

                        <div className="cv-header">
                            <h1>Other Experiences</h1>
                            <p>Student council representative. Sep 2014 - Sep 2016 Lindbergs Skola, Varberg.</p>
                        </div>

                        <div className="cv-header">
                            <h1>Interests</h1>
                            <p>Programming, game design, animals, running, gym, design, social-life, geografi/world. </p>
                        </div>

                        <div className="cv-header">
                            <h1>Languages</h1>
                            <p>Swedish - mother tongue</p>
                            <p>English  - extremely good knowledge</p> 
                            <p>German - basic knowledge</p> 
                            <p>Russian - basic knowledge</p>
                        </div>
                        
                        <div className="cv-header">
                            <h1>Programming languages/libraries</h1>
                            <p>Python - Advanced</p>
                            <p>Java - Beginner</p> 
                            <p>C# - Intermediate</p>
                            <p>HTML5 - Intermediate</p> 
                            <p>CSS3 - Intermediate</p> 
                            <p>Javascript - Advanced</p> 
                            <p>NodeJS - Advanced</p> 
                            <p>Electron - Beginner</p>
                            <p>Pygame - Intermediate</p>
                            <p>Axios - Beginner</p>
                        </div>

                    </div>
    
                </div>
            </div>
        </div>

        <div className="content-2">

            <h1>Open static CV</h1>

            <div className="cv-content">
                <a href={cv_eng} className="download-image" target="_blank">
                    <img src={flag_eng} width="50px" height="25px"/>
                    <img src={cv_eng} className="cv-image"/>
                </a>
                <a href={cv_swe} className="download-image" target="_blank">
                    <img src={flag_swe} width="50px" height="25px"/>
                    <img src={cv_swe} className="cv-image"/>
                </a>
            </div>

        </div>  
		</>
	);
}

export default Cv;