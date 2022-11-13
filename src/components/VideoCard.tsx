import React from 'react';
import { useNavigate } from 'react-router-dom';
import { VideoType } from '../pages/Main';
import { formatAgo } from '../util/date';

const VideoCard = ({ video }: { video: VideoType }) => {
	const { thumbnails, title, channelTitle, publishedAt } = video.snippet;
	const navigate = useNavigate();
	const moveDetailVideoPage = () => {
		navigate(`/video/watch/${video.id}`, { state: { video } });
	};

	return (
		<li onClick={moveDetailVideoPage}>
			<img src={thumbnails.medium.url} alt={title} className='w-full' />
			<div>
				<p className='font-semibold my-2 line-clamp-2'>{title}</p>
				<p className='text-sm opacity-80'>{channelTitle}</p>
				<p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
			</div>
		</li>
	);
};

export default VideoCard;
