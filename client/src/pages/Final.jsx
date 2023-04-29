// Final.jsx

import Riddle from '../components/Riddle';
import QuestionForm from '../components/QuestionForm';

const Final = () => {
	return (
		<div>
			<Riddle
				riddleText="
      You finally got here - and that's all and well, but there's just one thing
      here yet to tell, for the riddle the final location to spell, the secret of
      places where my treasures there dwell. 
	  A much talked of chappel, a place of great fame,
	  to do with the templares, and the holy grail game.
	  So take your result, like cards in a deck, 
	  you change them around, back to front, or front to back.
      "
			/>
			<QuestionForm hideQuestionForm={true} />
		</div>
	);
};

export default Final;
