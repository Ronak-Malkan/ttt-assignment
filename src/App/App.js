import './App.css';
import Histogram from '../Graph/histogram';
import React from 'react';

function App() {
  const [renderButton, changeRender] = React.useState(true);
  const [fetchedText, changeText] = React.useState("Hi");

  function changePage(){
    fetch('https://www.terriblytinytales.com/test.txt')
    .then((res) => res.text())
    .then((text) => {
      changeText(text);
      changeRender(false);
    });
  }

  if(renderButton){
    return (
      <button className='submitButton' onClick={changePage}>Submit</button>
    );
  }
  else {
    return(
      <Histogram fetchedText={fetchedText}/>
    );
  }
}

export default App;
