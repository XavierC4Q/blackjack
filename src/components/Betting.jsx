import React from "react";
import InfoValue from "./InfoValue";

export const Betting = ({ money, bet, addToBet, removeFromBet, placeBet }) => {
  return (
    <div className="betting-div">
      <div className="bet-info">
        <InfoValue label="Money Left" value={money} />
        <InfoValue label="Your Bet" value={bet} />
      </div>
    </div>
  );
};
