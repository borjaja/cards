import React, { useState } from 'react'
import './App.css';
import Card from './Card'

function App() {
  const [getname, setName] = useState('Emmie Quitzon')
  const changeName = newName => setName(newName)
  const changeInputHandler = (event) => setName(event.target.value)
  const [isVisible, setVisible] = useState(true)
  const toggleVisible = () => setVisible(!isVisible)
  const buttons = (
    <div>
      <button className="button button2">YES</button>
      <button className="button button3">NO</button>
    </div>);
  const cardsMarkup = isVisible && <div className="Cards">
    <Card name={getname} title="Regional Identity Developer" avatar="http://placeimg.com/640/480/abstract"
      onchangeName={() => changeName('Iron Patriot')} onchangeInputHandler={changeInputHandler}>
      {buttons}
    </Card>
  </div>

  return (
    <div className="App">
      <button className="button" onClick={toggleVisible}>Toggle</button>
      {cardsMarkup}
    </div>
  );
}


export default App;
