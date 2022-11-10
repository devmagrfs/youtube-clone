import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Root = () => {
	// flex flex-col items-center
	return (
		<div className='mx-auto my-0 text-center bg-blue-400 lg:w-[968px] lg:bg-red-400 xl:w-[1024px] xl:bg-yellow-400 2xl:w-[1280px]'>
			<Navbar />
			<Outlet />
		</div>
	);
};

export default Root;
