import Home from './pages/Home';
import Hardware from './pages/Hardware';
import Consumable from './pages/Consumable';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './pages/404';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/hardware" element={<Hardware />} />
				<Route path="/consumable" element={<Consumable />} />
				<Route path="*" element={<Error/>} />
				
			</Routes>
		</BrowserRouter>
	);
}

export default App;
