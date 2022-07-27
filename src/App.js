import React, { Component, useState, useEffect } from 'react';
import './App.css';
import Counter from './components/container/counterContainer';

function App() {
   const [emotion, setEmotion] = useState('happy');
   const [checkButton, setCheckButton] = useState('check');
   useEffect(() => {
      console.log('call use effect');
      console.log('check button', checkButton);
   }, [emotion, checkButton]);
      return (
         <div className = "App">
            <header className = "App-header">
               <Counter/>
            </header>
            <button onClick={() => setEmotion('sad')}>Sad</button>
            <button onClick={() => setCheckButton('call')} >{checkButton}</button>
         </div>
      );
}
export default App;