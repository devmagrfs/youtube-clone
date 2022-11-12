import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Root = () => {
	// flex flex-col items-center
	return (
		<div className='mx-auto my-0 text-center lg:w-[968px] xl:w-[1024px] 2xl:w-[1280px]'>
			<Header />
			<Outlet />
		</div>
	);
};

export default Root;
