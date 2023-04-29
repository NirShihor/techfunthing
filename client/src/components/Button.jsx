import React from 'react';
import { useNavigate } from 'react-router-dom';
import mystery_chime from '../assets/mystery_chime.mp3';

const Button = ({ nextPage }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate({ pathname: nextPage });
		playSound();
	};

	const playSound = () => {
		const audioEl = new Audio(mystery_chime);
		audioEl.play();
	};

	return (
		<div>
			<button onClick={handleClick} type='submit' className='startBtn'></button>
		</div>
	);
};

export default Button;
