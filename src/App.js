import React from 'react';
import DrawCard from './Deck';
import KeepDrawingCard from './KeepDrawingCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
	return (
		<div className="App">
			<section className="block">
				<Container fluid>
					<Row>
						<Col sm={5}>
							<DrawCard />
						</Col>
						<Col sm={5}>
							<KeepDrawingCard />
						</Col>
					</Row>
				</Container>
			</section>
		</div>
	);
}

export default App;
