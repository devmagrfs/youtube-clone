import React from 'react';
import { useNavigate } from 'react-router-dom';

interface VideoCardProps {
	title: string;
	channelTitle: string;
	publishedAt: string;
	thumbnails: string;
	movieId: string;
}

const VideoCard = ({ thumbnails, title, channelTitle, publishedAt, movieId }: VideoCardProps) => {
	const navigate = useNavigate();

	const moveDetailMoviePage = () => {
		navigate(`/watch/${movieId}`);
	};

	return (
		<div className='flex flex-col justify-center items-center w-96 cursor-pointer	' onClick={moveDetailMoviePage}>
			<img src={thumbnails} alt='video thumbnail' className='w-full h-full' />
			<p>{title}</p>
			<span>{channelTitle}</span>
			<span>{publishedAt}</span>
		</div>
	);
};

export default VideoCard;
