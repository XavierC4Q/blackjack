import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import { Card } from './Card'

class App extends Component {
  state = {
    deckID: null,
    remaining: 0,
    cards: []
  }

  componentDidMount(){
    const deckURL = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
    axios.get(deckURL)
    .then(res => {
      this.setState({
        deckID: res.data.deck_id,
        remaining: res.data.remaining
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleCardDraw = () => {
    const { deckID } = this.state
    const url = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=3`;

    axios.get(url)
    .then(res => {
      console.log('BEFORE SET STATE', this.state.cards)
      console.log('RES CARD', res.data.cards)
      this.setState({
        cards: [...this.state.cards, ...res.data.cards],
        remaining: res.data.remaining
      })
      console.log('AFTER SET STATE', this.state.cards)
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Blackjack</h1>
        <button onClick={this.handleCardDraw}>Draw a Card</button>
        <div className='card-container'>
          {this.state.cards.map(card => (<Card card={card} />))}
        </div>
      </div>
    );
  }
}

export default App;
