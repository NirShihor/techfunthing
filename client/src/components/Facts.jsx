import React from 'react';
import './facts.css';

const Facts = (props) => {
	return (
		<div>
			<div className='factsHeading'>{props.heading}</div>
			<div className='imageContainer'>
				<div className='factsImage'>{props.image}</div>
				<div className='factsImage'>{props.image}</div>
			</div>
			<div className='factsText'>{props.text}</div>
		</div>
	);
};

export default Facts;
