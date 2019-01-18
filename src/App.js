import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import { Card } from './Card'

const cardValues = {
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  "KING": 10,
  "QUEEN": 10,
  "JACK": 10
}


class App extends Component {
  state = {
    deck_id: null,
    remaining: 0,
    cards: [],
    handValue: 0,
    dealerCards: [],
    dealerHandValue: 0
  }

  componentDidMount(){
    this.fillDeck()
  }

  fillDeck = async () => {
    const deckURL = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
    try {
      const fillDeck = await axios.get(deckURL)
      const { data: { deck_id, remaining } } = fillDeck

      this.setState(prevState => ({ deck_id , remaining }))

      this.initialDraw(this.state.deck_id)
    }
    catch(err){
      console.log('Error filling Deck')
    }
  }

  initialDraw = async (deck_id) => {
    const drawCardUrl = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=4`
    try {
      const getInitialHands = await axios.get(drawCardUrl)
      const { data: { cards, remaining } } = getInitialHands

      let cardsForDealer = cards.slice(0, 2)
      let cardsForUser = cards.slice(2)

      this.setState(prevState => ({ 
        dealerCards: [...cardsForDealer], 
        cards: [...cardsForUser],
        handValue: this.getCardValues(...cardsForUser),
        dealerHandValue: this.getCardValues(cardsForDealer[1]),
        remaining 
      }))
    }
    catch(err){
      console.log(err)
    }
  }

  getCardValues = (...cards) => {
    let getCardValues = Object.values(cards)
    let findValue = getCardValues.reduce((total, c) => {
      if(c.value === 'ACE'){
        return total += this.handleAce()
      }
      return total += cardValues[c.value]
    }, 0)

    return findValue
  }

  handleAce = () => {
    let pickAceValue = prompt(
      `You have drawn an ace! Do you want it to count for 1 or for 10?`
      )
    if(!isNaN(pickAceValue)){
      if(Number(pickAceValue) !== 1 && Number(pickAceValue) !== 10){
        this.handleAce()
      }
      return Number(pickAceValue)
    }
    this.handleAce()
  }

  hitMe = async () => {

  }

  render() {
    return (
      <div>
        <h1>Blackjack</h1>
        <button onClick={this.handleCardDraw}>Hit Me</button>
        <div className='card-container'>
          {this.state.cards.map(card => (<Card card={card} />))}
        </div>
      </div>
    );
  }
}

export default App;
