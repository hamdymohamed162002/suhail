import { RouterProvider } from 'react-router-dom';
import { route } from './Routes';

function App() {
	return (
		<>
			<RouterProvider router={route}></RouterProvider>
		</>
	);
}

export default App;
