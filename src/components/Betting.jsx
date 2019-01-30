import React from "react";
import InfoValue from "./InfoValue";

const BetDiv = ({ addToBet, id, ...props }) => {
  return(
    <div className='bet' id={id} onClick={event => addToBet(event)}>${id}</div>
  )
}

export const Betting = ({ money, bet, addToBet, removeFromBet, placeBet }) => {
  return (
    <div className="betting-div">
      <div className="bet-info">
        <InfoValue label="Money Left" value={money} />
        <InfoValue label="Your Bet" value={bet} />
      </div>
      <div className='betting-selections'>
      <BetDiv id='25' addToBet={addToBet}/>
      <BetDiv id='50' addToBet={addToBet}/>
      <BetDiv id='100' addToBet={addToBet}/>
      <BetDiv id='250' addToBet={addToBet}/>
      <BetDiv id='500' addToBet={addToBet}/>
      <div>
        <button onClick={() => placeBet()}>Place Bet</button>
      </div>
      </div>
    </div>
  );
};
