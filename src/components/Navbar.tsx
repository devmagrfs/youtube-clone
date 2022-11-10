import React, { useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';

const Navbar = () => {
	const [searchText, setSearchText] = useState('');

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log('submit');
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchText(event.target.value);
		console.log(searchText);
	};

	return (
		<header className='flex'>
			<div className='w-2/4 flex justify-start items-center'>
				<BsYoutube className='inline text-red-600 dark:text-red-800' />
				<span>Youtube</span>
			</div>
			<div className='w-2/4 flex justify-start items-center'>
				<form onSubmit={handleSubmit} className='flex items-center'>
					<input type='text' placeholder='Search...' onChange={handleChange} value={searchText} />
					<button className='bg-gray-400'>
						<BsSearch className='mx-auto my-0' />
					</button>
				</form>
			</div>
		</header>
	);
};

export default Navbar;
