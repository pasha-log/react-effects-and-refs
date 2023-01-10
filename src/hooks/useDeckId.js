import { useState, useEffect } from 'react';
import axios from 'axios';

const useDeckId = () => {
	const [ deckId, setDeckId ] = useState(null);
	const [ error, setError ] = useState('');
	const [ loading, setloading ] = useState(true);

	const fetchData = () => {
		axios
			.get('https://deckofcardsapi.com/api/deck/new/shuffle/')
			.then((response) => {
				setDeckId(response.data.deck_id);
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => {
				setloading(false);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	// custom hook returns value
	return { deckId, error, loading };
};

export default useDeckId;
