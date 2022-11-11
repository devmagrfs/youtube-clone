import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Root = () => {
	// flex flex-col items-center
	return (
		<div className='mx-auto my-0 text-center lg:w-[968px] xl:w-[1024px] 2xl:w-[1280px]'>
			<Navbar />
			<Outlet />
		</div>
	);
};

export default Root;
