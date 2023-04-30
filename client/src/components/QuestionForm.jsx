import React, { useState, useEffect, useRef } from 'react';
import './questionForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import mystery_chime from '../assets/mystery_chime.mp3';
import mapUnfold from '../assets/mapUnfold.mp3';
import medieval_fanfare from '../assets/medieval_fanfare.mp3';
import creak from '../assets/creak.mp3';
import closingCreak from '../assets/closingCreak.mp3';
import barellDrop from '../assets/barrellDrop.mp3';
import writing from '../assets/writing.mp3';
import success2 from '../assets/success2.mp3';
import mapScotland from '../assets/mapScotland.png';
import Particles from './Particles';
import { v4 as uuidv4 } from 'uuid';

let apiURL;
if (process.env.NODE_ENV !== 'production') {
	apiURL = process.env.REACT_APP_API_URL;
} else {
	apiURL = '';
}

const QuestionForm = ({
	children,
	correctAnswer,
	nextStep,
	setRiddleFadeOut,
}) => {
	const [question, setQuestion] = useState('');
	const [answer, setAnswer] = useState('');
	const [hasPlayed, setHasPlayed] = useState(false);
	const [particles, setParticles] = useState(false);
	const [fadeOut, setFadeOut] = useState(false);
	const [letters, setLetters] = useState([]);
	const [isLetterBoxVisible, setIsLetterBoxVisible] = useState(false);

	const mapUnfoldRef = useRef(new Audio(mapUnfold));

	const zoomFactor = 0.1;
	const imageRef = useRef(null);

	const handleClick = () => {
		const filePath = mapScotland;
		playMapUnfold();
		const newWindow = window.open('', '_blank');
		newWindow.document.write(
			`<html>
			<head>
				<title>Map</title>
				<style>
				body {
					background-color: #A4A4A4;
					margin: 0;
					text-align: center;
					overflow: auto;
					height: 300vh;
				}
				.map-container {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 100%
					height: auto;
					position: relative;
					overflow: auto;
				}
				.map-wrapper {
					overflow: scroll;
					width: calc(100% - 80px);
					height: 100vh;
				}
				img {
					overflow: scroll;
				}
				.button-container {
					display: flex;
					flex-direction: column;
					gap: 8px;
					position: absolute;
					top: 50%;
					right: 30rem;
					transform: translateY(-50%);
				}
				button {
					border-radius: 5px;
					color: white;
					background-color: #1e1e1e;
				}
				</style>
			</head>
			<body>
				<div class="map-container">
				<div class="map-wrapper">
					<img id="image" src="${filePath}" alt="Image" style="width: auto; height: 100vh;" />
				</div>
				<div class="button-container">
					<button id="zoomIn">Zoom In</button>
					<button id="zoomOut">Zoom Out</button>
				</div>
				</div>
			</body>
			</html>`
		);
		newWindow.document.close();

		const image = newWindow.document.getElementById('image');
		const zoomInButton = newWindow.document.getElementById('zoomIn');
		const zoomOutButton = newWindow.document.getElementById('zoomOut');

		imageRef.current = image;
		imageRef.current.scale = 1;

		zoomInButton.onclick = () => {
			zoomImage(zoomFactor);
		};

		zoomOutButton.onclick = () => {
			zoomImage(-zoomFactor);
		};
	};

	const zoomImage = (zoomValue) => {
		imageRef.current.scale += zoomValue;
		imageRef.current.style.transform = `scale(${imageRef.current.scale})`;
	};

	const mysteryChimeRef = useRef(new Audio(mystery_chime));
	const medievalFanfareRef = useRef(new Audio(medieval_fanfare));
	const creakRef = useRef(new Audio(creak));
	const closingCreakRef = useRef(new Audio(closingCreak));
	const barellDropRef = useRef(new Audio(barellDrop));
	const writingRef = useRef(new Audio(writing));
	const success2Ref = useRef(new Audio(success2));

	// Update the playSuccess function to use the ref
	const playMapUnfold = () => {
		mapUnfoldRef.current.volume = 0.5; // volume set 0 to 1
		mapUnfoldRef.current.play();
	};

	const playMysteryChime = () => {
		mysteryChimeRef.current.volume = 0.2; // volume set 0 to 1
		mysteryChimeRef.current.play();
	};

	const playSuccess = () => {
		medievalFanfareRef.current.volume = 0.1; // volume set 0 to 1
		medievalFanfareRef.current.play();
	};

	const playCreak = () => {
		creakRef.current.volume = 0.5; // volume set 0 to 1
		creakRef.current.play();
	};

	const playClosingCreak = () => {
		closingCreakRef.current.volume = 0.5; // volume set 0 to 1
		closingCreakRef.current.play();
	};

	const playBarrellDrop = () => {
		barellDropRef.current.volume = 0.5; // volume set 0 to 1
		barellDropRef.current.play();
	};

	const playWriting = () => {
		writingRef.current.volume = 0.5; // volume set 0 to 1
		writingRef.current.play();
	};

	const playSuccess2 = () => {
		success2Ref.current.volume = 1; // volume set 0 to 1
		success2Ref.current.play();
	};

	const handleClickBox = () => {
		setIsLetterBoxVisible(!isLetterBoxVisible);
		playCreak();
	};
	const handleCloseClickBox = () => {
		setIsLetterBoxVisible(!isLetterBoxVisible);
		playClosingCreak();
	};

	const navigate = useNavigate();
	const handleChange = (e) => {
		setQuestion(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setTimeout(() => {
			setQuestion('');
		}, 3000);

		try {
			const response = await axios.post(`${apiURL}/ask-question`, {
				question,
				correctAnswer,
			});
			setAnswer(response.data.answer);
		} catch (error) {
			console.error('Error asking question:', error);
		}
	};

	if (answer.toLowerCase().includes('congratulations')) {
		if (!hasPlayed) {
			setTimeout(() => {
				playSuccess();
				setHasPlayed(true);
				setParticles(true);
			}, 1000);
		}
		setTimeout(() => {
			setFadeOut(true);
			setRiddleFadeOut(true);
		}, 7000);
		setTimeout(() => {
			navigate(nextStep);
			playMysteryChime();
		}, 8000);
	}

	useEffect(() => {
		if (answer) {
			const answerEl = document.querySelector('.answer');
			answerEl.classList.add('answer-animation');

			setTimeout(() => {
				answerEl.classList.remove('answer-animation');
				setAnswer('');
			}, 5000);
		}
	}, [answer]);

	const lettersArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

	const renderLetterButtons = () =>
		lettersArray.map((letter, index) => (
			<div key={index} draggable onDragStart={(e) => handleOnDrag(e, letter)}>
				{letter}
			</div>
		));

	const handleOnDrag = (e, letter) => {
		e.dataTransfer.setData('letter', letter);
	};

	const handleOnDragLetterBox = (e, sourceId) => {
		e.dataTransfer.setData('sourceId', sourceId);
	};

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const moveLetter = (sourceIndex, targetIndex) => {
		const newLetters = [...letters];
		const movedLetter = newLetters.splice(sourceIndex, 1)[0];
		newLetters.splice(targetIndex, 0, movedLetter);
		setLetters(newLetters);
	};

	const handleOnDropInLetterBox = (e, targetIndex) => {
		playWriting();
		e.preventDefault();
		e.stopPropagation();
		const letter = e.dataTransfer.getData('letter');
		const sourceId = e.dataTransfer.getData('sourceId');
		const sourceIndex = letters.findIndex((l) => l.id === sourceId);

		if (sourceIndex === -1 && letters.length < 7) {
			// If the letter is coming from the buttons container
			const newLetters = [...letters];
			newLetters.splice(targetIndex, 0, {
				id: uuidv4(),
				letter,
			});
			setLetters(newLetters);
		} else if (sourceIndex !== -1) {
			// If the letter is coming from the letterBox
			moveLetter(sourceIndex, targetIndex);
		}

		if (sourceIndex === -1 && letters.length < 7) {
			const newLetters = [...letters];
			newLetters.splice(targetIndex, 0, { id: uuidv4(), letter });
			setLetters(newLetters);
			localStorage.setItem('letters', JSON.stringify(newLetters));
		} else if (sourceIndex !== -1) {
			moveLetter(sourceIndex, targetIndex);
		}
	};

	useEffect(() => {
		const specificString = 'ROSLLYN';
		const currentLettersString = letters.map((l) => l.letter).join('');

		if (currentLettersString === specificString) {
			setTimeout(() => {
				playSuccess2();
			}, 3000);
			setTimeout(() => {
				navigate('/facts1');
			}, 9000);
		}
	}, [letters, navigate]);

	const handleDeleteDrop = (e) => {
		playBarrellDrop();
		e.preventDefault();
		const sourceId = e.dataTransfer.getData('sourceId');
		if (sourceId) {
			setLetters((prevLetters) => {
				const newLetters = prevLetters.filter((l) => l.id !== sourceId);
				localStorage.setItem('letters', JSON.stringify(newLetters));
				return newLetters;
			});
		}
	};

	useEffect(() => {
		const storedLetters = localStorage.getItem('letters');
		if (storedLetters) {
			setLetters(JSON.parse(storedLetters));
		}
	}, []);

	return (
		<div className={`fade ${fadeOut ? 'fade-out' : ''}`}>
			<form className='questionForm' onSubmit={handleSubmit}>
				<input
					className='questionInput'
					type='text'
					value={question}
					onChange={handleChange}
					placeholder='Insert question or place name'
				/>
				<button className='askBtn' type='submit'>
					Ask
				</button>
				{answer && <p className='answer'> {answer}</p>}
			</form>
			<button className='openModalBtn' onClick={handleClick}>
				{children}
			</button>

			<button className='letterBoxBtn' onClick={handleClickBox}></button>

			{particles && <Particles />}
			{isLetterBoxVisible && (
				<div className='letterBoxContainer draggable-letter'>
					<button className='closeButton' onClick={handleCloseClickBox}>
						X
					</button>
					<div className='letterButtonsContainer'>{renderLetterButtons()}</div>
					<br />
					<div
						className='letterBox draggable-letter'
						onDrop={(e) => {
							if (e.target.classList.contains('letterBox')) {
								handleOnDropInLetterBox(e, letters.length);
							}
						}}
						onDragOver={(e) => {
							if (e.target.classList.contains('letterBox')) {
								e.preventDefault();
							}
						}}
					>
						{letters.map(({ letter, id }, index) => (
							<div className='letterContainer'>
								<div
									draggable
									onDragStart={(e) => handleOnDragLetterBox(e, id)}
									onDrop={(e) => {
										e.stopPropagation();
										handleOnDropInLetterBox(e, index);
									}}
									onDragOver={(e) => {
										e.preventDefault();
									}}
									key={id}
									className='letter'
									maxLength='7'
								>
									{letter}
								</div>
							</div>
						))}
					</div>
					<div
						className='deleteArea'
						onDrop={handleDeleteDrop}
						onDragOver={handleDragOver}
					></div>
				</div>
			)}
		</div>
	);
};

export default QuestionForm;
