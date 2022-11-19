import React from 'react';

const DetailSkeleton = () => {
	return (
		<div className='basis-4/6 animate-pulse'>
			<div className='w-full h-[160rem] bg-slate-600 mb-2' />
			<div className='h-7 bg-slate-600 mb-2' />
			<div className='h-7 bg-slate-600' />
		</div>
	);
};

export default DetailSkeleton;
