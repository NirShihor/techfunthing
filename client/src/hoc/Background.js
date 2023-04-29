import React from 'react';
import backgroundImage from '../assets/oldmap3.png'; // Import the background image file

const Background = (WrappedComponent) => {
	return (props) => {
		const styles = {
			backgroundImage: `url(${backgroundImage})`, // Use the imported background image
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			width: '100%',
			height: '100%',
			position: 'absolute',
			top: 0,
			left: 0,
		};

		return (
			<div style={styles}>
				<WrappedComponent {...props} />
			</div>
		);
	};
};

export default Background;
