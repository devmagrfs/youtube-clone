import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BsYoutube, BsSearch } from 'react-icons/bs';

const Header = () => {
	const { keyword } = useParams();
	const navigate = useNavigate();
	const [searchText, setSearchText] = useState('');

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		navigate(`/videos/${searchText}`);
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchText(event.target.value);
		console.log(searchText);
	};

	useEffect(() => setSearchText(keyword || ''), [keyword]);

	return (
		<header className='flex'>
			<Link to='/' className='w-2/4 flex justify-start items-center'>
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
