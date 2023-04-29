import Riddle from '../components/Riddle';

const Step5 = () => {
	return (
		<Riddle
			riddleText="Romani built a fort, its people to protect,
			in Bochatle, just nearby, they say this is a fact.
			From where you stand there still, the castle you have found,
			slice through that place streight east, 
			small loch, in fife, near town.
			The Picts they called it 'flood', and that's the name that stuck, 
			the English thought they had it, till William Wallace struck.
			They say the Bruce was also there, and not less times than twice, 
			you find this castle, get its name, and this is how you slice: 
			you take the seventh, and move portside, 
			not one, nor two but three of strides.
			The one you sit on is yours to keep, 
			it makes the 5th of them you seek."
			correctAnswer='Lochleven Castle'
			nextStep='/step6'
		/>
	);
};

export default Step5;
