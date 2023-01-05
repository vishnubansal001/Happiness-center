import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import LandingPage from './LandingPage';
import Counseling from './Counseling';
import Events from './Events';
import Team from './Team';
import Archive from './Archive';
import About from './About';

document.onkeydown = function (e) {
	if (e.keyCode === 123) {
		return true;
	}
	if (
		e.ctrlKey &&
		e.shiftKey &&
		(e.keyCode === "I".charCodeAt(0) || e.keyCode === "i".charCodeAt(0))
	) {
		return false;
	}
	if (
		e.ctrlKey &&
		e.shiftKey &&
		(e.keyCode === "C".charCodeAt(0) || e.keyCode === "c".charCodeAt(0))
	) {
		return false;
	}
	if (
		e.ctrlKey &&
		e.shiftKey &&
		(e.keyCode === "J".charCodeAt(0) || e.keyCode === "j".charCodeAt(0))
	) {
		return false;
	}
	if (
		e.ctrlKey &&
		(e.keyCode === "U".charCodeAt(0) || e.keyCode === "u".charCodeAt(0))
	) {
		return false;
	}
	if (
		e.ctrlKey &&
		(e.keyCode === "S".charCodeAt(0) || e.keyCode === "s".charCodeAt(0))
	) {
		return false;
	}
};


const App = () => {

  return (
   <React.Fragment className="debug-screens">
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route exact path='/' element={<LandingPage/>} />
      <Route exact path='/about' element={<About  />} />
      <Route exact path='/counseling' element={<Counseling  />} />
      <Route exact path='/events' element={<Events  />} />
      <Route exact path='/team' element={<Team  />} />
      <Route exact path='/archive' element={<Archive  />} />
      </Routes>
    <Footer/>
    </BrowserRouter>
   </React.Fragment>
  );
}

export default App;
