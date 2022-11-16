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
	};

	useEffect(() => setSearchText(keyword || ''), [keyword]);

	return (
		<header className='w-full flex border-b border-zinc-600 mb-4 p-4'>
			<Link to='/' className='flex items-center'>
				<BsYoutube className='text-youtube dark:text-red-800 text-3xl' />
				<h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
			</Link>
			<form onSubmit={handleSubmit} className='w-full flex justify-center'>
				<input className='w-7/12 p-2 outline-none bg-black text-gray-50' type='text' placeholder='Search...' onChange={handleChange} value={searchText} />
				<button className='bg-zinc-600 px-4'>
					<BsSearch className='mx-auto my-0' />
				</button>
			</form>
		</header>
	);
};

export default Header;
