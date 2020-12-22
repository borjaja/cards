import React, {Component} from 'react'
import './App.css';
import Card from './Card'
import faker from 'faker'
import {ThemeProvider} from 'styled-components'
import Button from './element/Button'

const theme = {
  primary: '#4caf50',
  mango: 'yellow'
}

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      cards:[
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
      ],
    showCard:true
    }
  }

  toggleVisible = () => this.setState({showCard: !this.state.showCard})
  deleteCardHandler = (cardIndex) => {
    const cards = [...this.state.cards]
    cards.splice(cardIndex, 1)
    this.setState({cards})
  }
  changeNameHandler = (event, id) => {
    const cardIndex = this.state.cards.findIndex(card => card.id === id)
    const cards = [...this.state.cards]
    cards[cardIndex].name = event.target.value
    this.setState({cards})
  }

  buttonStyle = {
    backgroundColor: null
  }

  render(){
    const classes = ['button']
    if (this.state.cards.length < 3) classes.push('pink')
    if (this.state.cards.length < 2) classes.push('red')

    const cardsMarkup = this.state.showCard && this.state.cards.map(card =>
      <Card
        key={card.id}
        name={card.name}
        title={card.title}
        avatar={card.avatar}
        onChange={(event) => this.changeNameHandler(event, card.id)}
        deleteCardHandler={() => this.deleteCardHandler(card.id)} />
    )

    return (
      <ThemeProvider theme={theme}>
      <div className="App">
        <Button color="mango" length={this.state.cards.length} onClick={this.toggleVisible}>Toggle</Button>
        <button className={classes.join(' ')} onClick={this.toggleVisible}>Toggle</button>
        {cardsMarkup}
      </div>
      </ThemeProvider>
    );
  }
}


export default App;
