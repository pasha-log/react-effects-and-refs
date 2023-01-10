import React, { useState } from 'react';
import axios from 'axios';
import Card from './Card';
import './SingleCard.css';
import useDeckId from './hooks/useDeckId';

const SingleCard = () => {
	const { deckId } = useDeckId();
	const [ cards, setCards ] = useState([]);
	const [ remaining, setRemaining ] = useState();

	async function buttonHandler() {
		const cardResponse = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`);
		setRemaining(cardResponse.data.remaining);
		const cardSrc = cardResponse.data.cards[0].image;
		setCards([ ...cards, cardSrc ]);
	}

	return (
		<div className="Single-card-drawer-area">
			{remaining === 0 ? (
				alert('Error: no cards remaining!')
			) : (
				<button className="card-drawer" onClick={buttonHandler}>
					Draw a Card
				</button>
			)}
			<div className="Card-area-one">{cards.map((card) => <Card cardSrc={card} />)}</div>
		</div>
	);
};

export default SingleCard;
