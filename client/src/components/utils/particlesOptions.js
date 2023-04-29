const particlesOptions = {
	background: {
		color: {
			value: 'transparent',
		},
	},
	particles: {
		number: {
			value: 200,
			density: {
				enable: true,
				value_area: 800,
			},
		},
		color: {
			value: ['#FF3CAC', '#8FD3FF', '#3DFF5E', '#FF8F8F', '#FFE800'],
		},
		shape: {
			type: 'square',
			stroke: {
				width: 0,
				color: 'transparent',
			},
		},
		opacity: {
			value: 0.8,
			random: true,
			anim: {
				enable: true,
				speed: 1,
				opacity_min: 0,
				sync: false,
			},
		},
		life: {
			count: undefined, // Set to a number if you want a limited number of particles
			duration: {
				value: 3, // Particle life duration in seconds
			},
			delay: {
				value: 0,
				random: {
					enable: false,
					minimumValue: 0,
				},
			},
		},
		size: {
			value: 10,
			random: true,
			anim: {
				enable: false,
				speed: 4,
				size_min: 0.3,
				sync: false,
			},
		},
		line_linked: {
			enable: false,
		},
		move: {
			enable: true,
			speed: 5,
			direction: 'none',
			random: false,
			straight: false,
			out_mode: 'out',
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200,
			},
		},
	},
	interactivity: {
		detect_on: 'canvas',
		events: {
			onhover: {
				enable: true,
				mode: 'bubble',
			},
			onclick: {
				enable: true,
				mode: 'repulse',
			},
			resize: true,
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 1,
				},
			},
			bubble: {
				distance: 250,
				size: 0,
				duration: 2,
				opacity: 0,
				speed: 3,
			},
			repulse: {
				distance: 400,
				duration: 0.4,
			},
			push: {
				particles_nb: 4,
			},
			remove: {
				particles_nb: 2,
			},
		},
	},
	retina_detect: true,
};

export default particlesOptions;
