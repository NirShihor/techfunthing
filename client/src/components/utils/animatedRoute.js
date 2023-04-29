import React from 'react';
import { Route } from 'react-router-dom';
import { motion } from 'framer-motion';

const pageVariants = {
	initial: {
		opacity: 0,
	},
	in: {
		opacity: 1,
	},
	out: {
		opacity: 0,
	},
};

const pageTransition = {
	type: 'tween',
	ease: 'anticipate',
	duration: 0.5,
};

const AnimatedRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={({ location }) => (
			<motion.div
				key={location.pathname}
				initial='initial'
				animate='in'
				exit='out'
				variants={pageVariants}
				transition={pageTransition}
			>
				<Component />
			</motion.div>
		)}
	/>
);

export default AnimatedRoute;
