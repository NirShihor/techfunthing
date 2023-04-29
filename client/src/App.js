import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Opening from './pages/Opening';
import Start from './pages/Start';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Step4 from './pages/Step4';
import Step5 from './pages/Step5';
import Step6 from './pages/Step6';
import Step7 from './pages/Step7';
import Final from './pages/Final';
import Facts1 from './pages/Facts1';

//   TODO: see if that is being used and remove with library if not
function App() {
	useEffect(() => {
		document.body.classList.add('customCursor');
		return () => {
			document.body.classList.remove('customCursor');
		};
	}, []);

	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/opening' element={<Opening />} />
				<Route path='/start' element={<Start />} />
				<Route path='/step2' element={<Step2 />} />
				<Route path='/step3' element={<Step3 />} />
				<Route path='/step4' element={<Step4 />} />
				<Route path='/step5' element={<Step5 />} />
				<Route path='/step6' element={<Step6 />} />
				<Route path='/step7' element={<Step7 />} />
				<Route path='/final' element={<Final />} />
				<Route path='/facts1' element={<Facts1 />} />
			</Routes>
		</Router>
	);
}

export default App;
