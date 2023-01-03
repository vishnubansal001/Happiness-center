import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import LandingPage from './LandingPage';

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
   <React.Fragment>
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route exact path='/' render={(props)=><LandingPage {...props} />} />
      </Routes>
    <Footer/>
    </BrowserRouter>
   </React.Fragment>
  );
}

export default App;
