import React from 'react'
import './App.css';
import Card from './Card'
import faker from 'faker'

function App() {
  const buttons = (
    <div>
      <button className="button button2">YES</button>
      <button className="button button3">NO</button>
    </div>);
  return (
    <div className="App">
      <Card
        name={` ${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        avatar={faker.image.abstract()}>
        {buttons}
      </Card>
      <Card
        name={` ${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        avatar={faker.image.city()}>
        {buttons}
      </Card>
      <Card
        name={` ${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        avatar={faker.image.nightlife()}>
        {buttons}
      </Card>
    </div>
  );
}


export default App;
