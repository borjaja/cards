import React, { useState } from 'react'
import './App.css';
import Card from './Card'

function App() {
  const [getname, setName] = useState('Emmie Quitzon')
  const changeName = () => {
    setName('Iron man')
  }
  const buttons = (
    <div>
      <button className="button button2">YES</button>
      <button className="button button3">NO</button>
    </div>);
  return (
    <div className="App">
      <button className="button" onClick={changeName}>Change name</button>
      <Card name={getname} title="Regional Identity Developer" avatar="http://placeimg.com/640/480/abstract">
        {buttons}
      </Card>
      <Card name="Dallin Bradtke" title="Human Applications Designer" avatar="http://placeimg.com/640/480/city">
        {buttons}
      </Card>
    </div>
  );
}


export default App;
