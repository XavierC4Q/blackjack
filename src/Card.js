import React from 'react'

export const Card = ({ card }) => {
    return (
        <React.Fragment>
            <img src={card.image} alt='card' />
        </React.Fragment>
    )
}