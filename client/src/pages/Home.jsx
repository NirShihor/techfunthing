import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import mystery_chime from '../assets/mystery_chime.mp3';

import './home.css';

const Home = () => {
	const mysteryChimeRef = useRef(new Audio(mystery_chime));

	const playMysteryChime = () => {
		mysteryChimeRef.current.volume = 0.1; // volume set 0 to 1
		mysteryChimeRef.current.play();
	};

	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/opening');
		playMysteryChime();
	};

	return (
		<div>
			<div className='home'>
				<button
					onClick={handleClick}
					type='submit'
					className='startButton'
				></button>
			</div>
		</div>
	);
};

export default Home;
