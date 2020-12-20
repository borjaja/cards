import React, { useState } from 'react'
import './App.css';
import Card from './Card'
import faker from 'faker'

function App() {
  const [isVisible, setVisible] = useState(true)
  const toggleVisible = () => setVisible(!isVisible)
  const [getCards, setCards] = useState([
    {
      id: faker.name.id,
      name: faker.name.firstName(),
      title: faker.name.jobTitle(),
      avatar: faker.image.business(),
    },
    {
      id: faker.name.id,
      name: faker.name.firstName(),
      title: faker.name.jobTitle(),
      avatar: faker.image.abstract(),
    },
    {
      id: faker.name.id,
      name: faker.name.firstName(),
      title: faker.name.jobTitle(),
      avatar: faker.image.people(),
    },
  ])
  const deleteCardHandler = (cardIndex) => {
    const cards = [...getCards]
    cards.splice(cardIndex, 1)
    setCards(cards)
  }
  const cardsMarkup = isVisible && getCards.map((card, index) =>
    <Card
      key={card.id}
      name={card.name}
      title={card.title}
      avatar={card.avatar}
      deleteCardHandler={() => deleteCardHandler(index)} />
  )

  return (
    <div className="App">
      <button className="button" onClick={toggleVisible}>Toggle</button>
      {cardsMarkup}
    </div>
  );
}


export default App;
