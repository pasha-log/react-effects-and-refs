import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Card from './Card';
import './SingleCard.css';
import useDeckId from './hooks/useDeckId';

const TimerCard = () => {
	const { deckId } = useDeckId();
	const [ cards, setCards ] = useState([]);
	const [ remaining, setRemaining ] = useState();
	const [ start, setStart ] = useState(false);
	const firstStart = useRef(true);
	const timerId = useRef();

	useEffect(
		() => {
			if (firstStart.current) {
				console.log("first render, don't run useEffect for timer");
				firstStart.current = !firstStart.current;
				return;
			}

			if (start) {
				timerId.current = setInterval(async () => {
					const cardResponse = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`);
					setRemaining(cardResponse.data.remaining);
					const cardSrc = cardResponse.data.cards[0].image;
					setCards([ ...cards, cardSrc ]);
				}, 1000);
			} else {
				clearInterval(timerId.current);
			}

			return () => clearInterval(timerId.current);
		},
		[ start ]
	);

	const toggleStart = () => {
		setStart(!start);
	};

	return (
		<div className="Toggle-card-drawer-area">
			{remaining === 0 ? (
				alert('Error: no cards remaining!')
			) : (
				<button className="toggler" onClick={toggleStart}>
					{start ? 'Stop Drawing' : 'Start Drawing'}
				</button>
			)}
			<div className="Card-area-two">{cards.map((card) => <Card cardSrc={card} />)}</div>
		</div>
	);
};

export default TimerCard;
