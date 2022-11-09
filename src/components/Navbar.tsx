import React, { useState } from 'react';

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
		<nav>
			<div>
				logo
				<span>Youtube</span>
			</div>
			<div>
				<form onSubmit={handleSubmit}>
					<input type='text' placeholder='Search...' onChange={handleChange} value={searchText} />
					<button>검색</button>
				</form>
			</div>
		</nav>
	);
};

export default Navbar;
