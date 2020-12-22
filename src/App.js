import React, { useState } from 'react'
import './App.css';
import Card from './Card'
import faker from 'faker'
import styled, {ThemeProvider, css} from 'styled-components'
const theme = {
  primary: '#4caf50',
  mango: 'yellow'
}
const Button = styled.button` 
  border: none;
  ${props => props.color && css`
    background-color: ${props => props.length>2? props.theme[props.color]: props.length<2?'red':'pink'};
    color: ${props => props.length<=1?'white':'black'};
  `}
  padding: 15px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: ${props => props.length<=1?'bold':'normal'};
  margin: 4px 2px;
  cursor: pointer;
  min-width: 80px;
`
function App() {
  const [isVisible, setVisible] = useState(true)
  const toggleVisible = () => setVisible(!isVisible)
  const [getCards, setCards] = useState([
    {
      id: 'aaaaaaaaaaaaaa',
      name: faker.name.firstName(),
      title: faker.name.jobTitle(),
      avatar: faker.image.business(),
    },
    {
      id: 'bbbbbbbbbbbbbb',
      name: faker.name.firstName(),
      title: faker.name.jobTitle(),
      avatar: faker.image.abstract(),
    },
    {
      id: 'ccccccccccccccc',
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
  const changeNameHandler = (event, id) => {
    console.log(id)
    debugger;
    const cardIndex = getCards.findIndex(card => card.id === id)
    const cards = [...getCards]
    cards[cardIndex].name = event.target.value
    setCards(cards)
  }
  const cardsMarkup = isVisible && getCards.map(card =>
    <Card
      key={card.id}
      name={card.name}
      title={card.title}
      avatar={card.avatar}
      onChange={(event) => changeNameHandler(event, card.id)}
      deleteCardHandler={() => deleteCardHandler(card.id)} />
  )
  const buttonStyle = {
    backgroundColor: null
  }
  const classes = ['button']
  if (getCards.length < 3) classes.push('pink')
  if (getCards.length < 2) classes.push('red')

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Button color="mango" length={getCards.length}>Toggle</Button>
      <button className={classes.join(' ')} onClick={toggleVisible}>Toggle</button>
      {cardsMarkup}
    </div>
    </ThemeProvider>
  );
}


export default App;
