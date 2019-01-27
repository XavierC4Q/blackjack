import React, { PureComponent } from "react";
import InfoValue from "./InfoValue";
import { Betting } from "./Betting";

export default class Info extends PureComponent {
  state = {
    money: 3000,
    bet: 0,
    betting: true
  };

  addToBet = event => {
    let value = event.target.id;
    this.setState(prevState => ({ bet: prevState.bet + Number(value) }));
  };

  placeBet = () => {
    this.setState({ betting: false });
  };

  render() {
    const { remaining, handValue, dealerValue } = this.props;
    const { bet, betting, money } = this.state;
    return (
      <div className="info-values-div">
        <div className="card-info-div">
          <InfoValue label="Cards Remaining" value={remaining} />
          <InfoValue label="Your Hand" value={handValue} />
          <InfoValue label="Dealer Hand" value={dealerValue} />
        </div>
        {betting && (
          <Betting
            addToBet={this.addToBet}
            placeBet={this.placeBet}
            bet={bet}
            money={money}
          />
        )}
      </div>
    );
  }
}
