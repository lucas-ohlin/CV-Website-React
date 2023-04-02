//React/other imports
import { useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from "react-router-dom";

//css imports
import './App.css'
import './css/footer.css'
import './css/header.css'
import './css/contact-about.css'
import './css/cv.css'

//Pages import
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Main from './pages/Main';
import Cv from './pages/Cv';

//Components import
import Navbar from './components/Navbar';

//The application (which will be sent into main.jsx then into index.html as root)
const App = () => {
	
	//Endless spining :D (easeter egg)
	function SpinObject() {
		document.body.style.backgroundColor = "rgb(190, 68, 68)";
		setInterval(() => {
			document.getElementById('easter-egg').style.transform += "rotate(1deg)";
		});
	}

	useEffect(() => {

		//Navbar to apear after scrolling down
		window.onscroll = function() {
			//If the screen is bigger than 1000px do this
			if (window.innerWidth > 1000) {
				//If scrolled down more than 150px from the top of the document
				if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
					//Change the colours to the default ones
					document.getElementById("nav-id").style.background = "#001229";
					document.getElementById("nav-id").style.borderBottomColor = "#5eaae9"
				}
				else {
					//Remove the colours when navbar is at the top
					document.getElementById("nav-id").style.background = "";
					document.getElementById("nav-id").style.borderBottomColor = ""
				}  
			}
		};

	});

  	return (
		<div className='App'>
			<Router>

				<Navbar />

				<div className='main-container'>
					<div className='content-container'>
						<main>

							<Switch>
								<Route path="/about">
									<About />
								</Route>

								<Route path="/contact">
									<Contact />
								</Route>

								<Route path="/portfolio">
									<Portfolio />
								</Route>

								<Route path="/cv">
									<Cv />
								</Route>

								<Route path="/">
									<Main />
								</Route>		
							</Switch>

						</main>

						<footer>
							<div className="footer-container">
								<div className="footer-content">
									<p>Made with <button id="easter-egg" onClick={SpinObject}>❤️</button> by Lucas Persson Öhlin</p>
								</div>
							</div>
						</footer>

					</div>
				</div>

			</Router>
		</div>
  	)

}

export default App
