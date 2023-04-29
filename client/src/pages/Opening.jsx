import React, { useEffect, useRef } from 'react';
import './opening.css';
import { useNavigate } from 'react-router-dom';
import mystery_chime from '../assets/mystery_chime.mp3';
import war from '../assets/war.mp3';

const Opening = () => {
	const navigate = useNavigate();

	const handleSubmit = () => {
		navigate('/start');
		playMysteryChime();
	};

	const mysteryChimeRef = useRef(new Audio(mystery_chime));
	const warRef = useRef(new Audio(war));

	const playMysteryChime = () => {
		mysteryChimeRef.current.volume = 0.3; // volume set 0 to 1
		mysteryChimeRef.current.play();
	};

	const playWar = () => {
		warRef.current.volume = 0.03; // volume set 0 to 1
		warRef.current.play();
	};

	useEffect(() => {
		const warAudio = warRef.current;

		return () => {
			warAudio.pause();
			warAudio.currentTime = 0;
		};
	}, []);
	useEffect(() => {
		document.body.classList.add('fade-in');
		playMysteryChime();
		setTimeout(() => {
			playWar();
		}, 5000);
		return () => {
			document.body.classList.remove('fade-in');
		};
	}, []);

	return (
		<div>
			<div className='container fade-in'>
				<form onSubmit={handleSubmit} className='parchment'>
					<p className='parchmentText'>
						<span className='date'>
							In the 3rd year of the reign of King Alexander III
							<span style={{ color: 'transparent' }}>.</span>
						</span>
						<br />
						Odart, <br />
						As I have been away, raising my sword against heathens on faraway
						soil, thou have taken my Abigail. She would not have resisted thy
						charms for long, believing I perished and requiring a guardian for
						her and Blaire. I was enchained, yet survived, and despite the scars
						and aches, I have returned. But whilst I was away, my enemies,
						loathing me for serving a foreign cause, grew strong, and I know
						that my days are few. Yet Abigail and Blaire must live. My foes will
						seek them both, especially the lad, to extinguish my lineage. To
						shield them, thou must have the means, which I deem thou has not.
						For this end, I shalt guide thou to riches beyond thy dreams, long
						concealed. Thou will need to use wits and pursue the path I have
						set, and thou shall become as wealthy as monarchs. In return, I ask
						naught more than for thee to tend to my Abigail the way a husband
						ought, and care for my Blaire as a father would. Now, make haste.
						Soon, they will be at my door, and swiftly upon thy heels
						thereafter. Good fortune to the three of thee, and may the Lord be
						with thee. Please impart my undying love to my wife and son, and
						accept my gratitude for setting out on this most perilous of
						jurnies.
					</p>
					<button type='submit' className='startBtn'></button>
				</form>
			</div>
		</div>
	);
};

export default Opening;
