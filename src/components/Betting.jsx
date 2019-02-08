import React from "react";
import InfoValue from "./InfoValue";

const BetDiv = ({ addToBet, id, ...props }) => {
  return(
    <div 
    className='bet' 
    id={id} 
    onClick={event => addToBet(event)}>${id}</div>
  )
}

const RemoveDiv = ({ removeFromBet, count, id, ...props }) => {
  return(
    <div 
    className='remove-bet'
    id={id} 
    onClick={event => removeFromBet(event)}>{`Remove $${id}: ${count}x`}</div>
  )
}

export const Betting = ({ addToBet, removeFromBet, placeBet, ...props }) => {

  return (
    <div className="betting-div">
      <div className="bet-info">
        <InfoValue label="Money Left" value={`$${props.money}`} />
        <InfoValue label="Your Bet" value={`$${props.bet}`} />
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
      {props['25'] !== 0 && 
        <RemoveDiv 
        removeFromBet={removeFromBet} 
        count={props['25']}
        id='25' 
        />}
      </div>
    </div>
  );
};
