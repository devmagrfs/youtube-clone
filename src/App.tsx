import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Root from './pages/Root';
import Detail from './pages/Detail';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <Main /> },
			{ path: 'videos', element: <Main /> },
			{ path: 'videos/:keyword', element: <Main /> },
			{ path: 'videos/watch/:videoId', element: <Detail /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
