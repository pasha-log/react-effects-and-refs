import React from 'react';
import './Card.css';

const Card = ({ cardSrc }) => {
	let angle = Math.random() * 90 - 45;
	let randomX = Math.random() * 40 - 20;
	let randomY = Math.random() * 40 - 20;
	const styles = {
		transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
	};
	return (
		<div className="card">
			<img className="card-img" src={cardSrc} alt="" style={styles} />
		</div>
	);
};

export default Card;
