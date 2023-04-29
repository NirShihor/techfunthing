import Particles from 'react-tsparticles';
// import { loadSlim } from 'tsparticles-slim';
import particlesOptions from './utils/particlesOptions';
import { loadFull } from 'tsparticles';

const ParticlesComponent = () => {
	const particlesInit = async (main) => {
		await loadFull(main);
	};

	return (
		<Particles
			id='tsparticles'
			init={particlesInit}
			options={particlesOptions}
		/>
	);
};

export default ParticlesComponent;
