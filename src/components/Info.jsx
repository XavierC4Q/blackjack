import React, { PureComponent } from "react";
import InfoValue from "./InfoValue";
import { Betting } from "./Betting";

export default class Info extends PureComponent {
  state = {
    money: 3000,
    bet: 0,
    betting: true,
    "25": 0,
    "50": 0,
    "100": 0,
    "250": 0,
    "500": 0
  };

  addToBet = event => {
    const { bet, money } = this.state
    let value = event.target.id;
    if(bet + Number(value) <= money){
      this.setState(prevState => ({
        [value]: prevState[value] + 1, 
        bet: prevState.bet + Number(value)}
      ))
    }
  };

  placeBet = () => {
    this.setState({ betting: false });
  };

  removeFromBet = event => {};

  render() {
    const { remaining, handValue, dealerValue } = this.props;
    return (
      <div className="info-values-div">
        <div className="card-info-div">
          <InfoValue label="Cards Remaining" value={remaining} />
          <InfoValue label="Your Hand" value={handValue} />
          <InfoValue label="Dealer Hand" value={dealerValue} />
        </div>
        {this.state.betting && (
          <Betting
            {...this.state}
            addToBet={this.addToBet}
            removeFromBet={this.removeFromBet}
            placeBet={this.placeBet}
          />
        )}
      </div>
    );
  }
}
