import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const slides = document.querySelectorAll('.slider-item');
  let startPosition = 0;

  function slideNextImage(e) {
    slides[startPosition].style.display = 'none'; 
    slides[++startPosition].style.display = 'block';
    if (startPosition === slides.length - 1) { 
      e.target.style.display = 'none';
    }
  };

  function slidePrevImage(e) {
    slides[startPosition].style.display = 'none';
    slides[--startPosition].style.display = 'block';
    if (startPosition === 0) {
      e.target.style.display = 'none';
    }
  }

  function createText() {
    return {__html: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vitae, modi rerum beatae provident
    explicabo exercitationem doloremque sunt. Labore minima ratione praesentium nihil magnam necessitatibus 
    illum commodi laboriosam et cum.`}
  };

  const props = {
    className: "welcome-text",
    id: "content",
  }
  return (
    <div className="container"> 
      <h1 className="title"> { 
        'welcome to React'.split(' ').map((el, index) => index % 2 === 0 ? el.toUpperCase() + ' ' : el + ' ')
      } </h1>
      <p dangerouslySetInnerHTML={ createText() } { ...props } ></p>
      <div className="slider-container">
        <div className="slider-item"><img className="slider-item__img" src= {  logo } alt="logo"/>1</div>
        <div className="slider-item"><img className="slider-item__img" src= {  logo } alt="logo"/>2</div>
        <div className="slider-item"><img className="slider-item__img" src= {  logo } alt="logo"/>3</div>
        <button className="slider-btn prev" onClick={ slideNextImage }>
          <img src={ logo } className="prev" alt="logo"/>
        </button>
        <button className="slider-btn next" onClick={ slidePrevImage }>
          <img src={ logo } className="next" alt="logo"/>
        </button>
      </div>
    </div>
  );
}

export default App;
