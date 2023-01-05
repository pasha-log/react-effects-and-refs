import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import CreateCard from './Card';
// import CardDrawTimer from './CardDrawTimer';

const baseURL = 'https://deckofcardsapi.com/api/deck';
let cardArray = []

const KeepDrawingCard = () => {
	const [ deckId, setDeckId ] = useState(null);
	const [ cards, setCards ] = useState(cardArray);
	const [ remaining, setRemaining ] = useState();
    const timerId = useRef();

	useEffect(() => {
		async function loadCard() {
			const res = await axios.get(`${baseURL}/new/shuffle/`);
			const deckId = res.data.deck_id;
			setDeckId(deckId);
		}
		loadCard();
	}, []);

	async function buttonHandler() {
		timerId.current = setInterval( async () => {
			const cardRes = await axios.get(`${baseURL}/${deckId}/draw/`);
			setRemaining(cardRes.data.remaining);
			const cardSrc = cardRes.data.cards[0].image;
			let cardArrayCopy = [ ...cards ];
			cardArrayCopy.push(cardSrc);
			setCards(cardArrayCopy);
		}, 1000)
	}
	
    // const stopTimer = () => {
    //     clearInterval(timerId.current)
    // }


	return (
		<div>
			{remaining === 0 ? (
				alert('Error: no cards remaining!')
			) : (
				<button onClick={() => buttonHandler()}>Draw a Card Every Second</button>
			)}
			<div className="card-area">{cards.map((card) => <CreateCard cardSrc={card} id={uuid()} />)}</div>
		</div>
	);
};

export default KeepDrawingCard;
