import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import CreateCard from './Card';
import "./Deck.css";

const baseURL = 'https://deckofcardsapi.com/api/deck';
let cardArray = []

const DrawCard = () => {
	const [ deckId, setDeckId ] = useState(null);
	const [ cards, setCards ] = useState(cardArray);
	const [ remaining, setRemaining ] = useState();

	useEffect(() => {
		async function loadCard() {
			const res = await axios.get(`${baseURL}/new/shuffle/`);
			const deckId = res.data.deck_id;
			setDeckId(deckId);
		}
		loadCard();
	}, []);

	async function buttonHandler() {
		const cardRes = await axios.get(`${baseURL}/${deckId}/draw/`);
		setRemaining(cardRes.data.remaining);
		const cardSrc = cardRes.data.cards[0].image;
		let cardArrayCopy = [ ...cards ];
		cardArrayCopy.push(cardSrc);
		setCards(cardArrayCopy);
	}

	return (
		<div className='Single-card-drawer-area'>
			{remaining === 0 ? (
				alert('Error: no cards remaining!')
			) : (
				<button className="card-drawer" onClick={() => buttonHandler()}>Draw a Card</button>
			)}
			<div className="Card-area-one">{cards.map((card) => <CreateCard cardSrc={card} id={uuid()} />)}</div>
		</div>
	);
};

export default DrawCard;
