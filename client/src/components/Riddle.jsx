import React, { useState, useEffect } from 'react';
import './riddle.css';
import QuestionForm from './QuestionForm';
import Background from '../hoc/Background';
import { useLocation } from 'react-router-dom';

const Start = ({ riddleText, correctAnswer, nextStep }) => {
	const [riddleFadeOut, setRiddleFadeOut] = useState(false);

	useEffect(() => {
		document.body.classList.add('fade-in');
		return () => {
			document.body.classList.remove('fade-in');
		};
	}, []);

	const location = useLocation();

	return (
		<div className='startContainer fade-in'>
			<div className='startContainer'></div>
			<div className={`riddle ${riddleFadeOut ? 'fade-out' : ''}`}>
				{riddleText}
			</div>
			<div
				className='questionContainer'
				style={location.pathname.includes('final') ? { display: 'none' } : {}}
			>
				<QuestionForm
					correctAnswer={correctAnswer}
					nextStep={nextStep}
					setRiddleFadeOut={setRiddleFadeOut}
				/>
			</div>
		</div>
	);
};

export default React.memo(Background(Start));
