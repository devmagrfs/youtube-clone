import React from 'react';

interface VideoCardSkeletonProp {
	isList?: boolean;
}

const VideoCardSkeleton = ({ isList }: VideoCardSkeletonProp) => {
	return (
		<li className={`${isList ? 'flex gap-1 mx-2 mb-2' : 'mx-2 mb-2'} animate-pulse`}>
			<div className={`${isList ? 'mr-2' : ''} w-full h-[180px] bg-slate-600`} />
			<div className='w-full'>
				<p className='h-[20px] my-2 bg-slate-600' />
				<p className='h-[20px] my-2 bg-slate-600' />
				<p className='h-[20px] bg-slate-600' />
			</div>
		</li>
	);
};

export default VideoCardSkeleton;
