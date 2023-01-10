import React from 'react';
import './CardTable.css';
import SingleCard from './SingleCard';
import TimerCard from './TimerCard';

/* Main component. */
function CardTable() {
	return (
		<div className="CardTable">
			<main>
				<SingleCard />
				<TimerCard />
			</main>
		</div>
	);
}

export default CardTable;
