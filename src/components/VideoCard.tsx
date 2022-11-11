import React from 'react';
import { useNavigate } from 'react-router-dom';
import { VideoType } from '../pages/Main';

interface VideoProps {
	video: VideoType;
}

const VideoCard = ({ video }: VideoProps) => {
	const { thumbnails, title, channelTitle, publishedAt } = video.snippet;
	const navigate = useNavigate();

	const moveDetailMoviePage = () => {
		navigate(`/watch/${video.id}`);
	};

	return (
		<div className='flex flex-col justify-center items-center w-96 cursor-pointer' onClick={moveDetailMoviePage}>
			<img src={thumbnails.default.url} alt='video thumbnail' className='w-full h-full' />
			<p>{title}</p>
			<span>{channelTitle}</span>
			<span>{publishedAt}</span>
		</div>
	);
};

export default VideoCard;
