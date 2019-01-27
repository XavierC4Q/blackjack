import React from 'react'

export const Card = ({ card }) => {
    return (
        <React.Fragment>
            <img width='170' height='200' src={card.image} alt='card' />
        </React.Fragment>
    )
}