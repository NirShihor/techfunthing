import Riddle from '../components/Riddle';

const Step6 = () => {
	return (
		<Riddle
			riddleText="
        From where you stand, look straight near north, 
        to ancient gathering of picts,
        where son of lion was given force,
        and Kenneth in its midst. 
        The Stone of Scots was there as well, 
        and many others here were crowned, 
        where abbey there was then created, 
        and first of Alba council found.
        A castle not, yet rather splendid, 
        where kings have ruled, and dynasties ended.
        this time take 3rd of name, not type, 
        and use it as your 6th, that's right.
        "
			correctAnswer='Scone Palace'
			nextStep='/step7'
		/>
	);
};

export default Step6;
