import React from 'react'
import './App.css';
import Card from './Card'
import faker from 'faker'

function App() {
  return (
    <div className="App">
      <Card
        name={` ${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        avatar={faker.image.city()} />
      <Card
        name={` ${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        avatar={faker.image.fashion()} />
      <Card
        name={` ${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        avatar={faker.image.nightlife()} />
    </div>
  );
}


export default App;
