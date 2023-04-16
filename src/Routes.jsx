import { createHashRouter, Outlet } from 'react-router-dom';
import NotFound404 from './Pages/NotFound404';
import Home from './Pages/home/Home';
import Navbar from './Components/navbar/Navbar';
import Donation from './Pages/Donation';
import Partners from './Pages/Partners';

const LayOut = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export let route = createHashRouter([
	{
		path: '/',
		element: <LayOut />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/donation',
				element: <Donation />,
			},
			{
				path: '/partners',
				element: <Partners />,
			},
			{
				path: '*',
				element: <NotFound404 />,
			},
		],
	},
]);
