import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsYoutube, BsSearch } from 'react-icons/bs';

const Header = () => {
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
			<Link className='w-2/4 flex justify-start items-center' to='/'>
				<BsYoutube className='inline text-red-600 dark:text-red-800' />
				<h1>Youtube</h1>
			</Link>
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

export default Header;
