import React from 'react';

interface VideoCardProps {
	title: string;
	channelTitle: string;
	publishedAt: string;
	thumbnails: string;
}

const VideoCard = ({ thumbnails, title, channelTitle, publishedAt }: VideoCardProps) => {
	return (
		<div className='flex flex-col justify-center items-center w-96'>
			<img src={thumbnails} alt='video thumbnail' className='w-full h-full' />
			<p>{title}</p>
			<span>{channelTitle}</span>
			<span>{publishedAt}</span>
		</div>
	);
};

export default VideoCard;
