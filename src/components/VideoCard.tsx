import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { VideoType } from '../types/youtube';
import { formatAgo } from '../util/date';

interface VideoCardProp {
	video: VideoType;
	type?: string;
}

const VideoCard = ({ video, type }: VideoCardProp) => {
	const { thumbnails, title, channelTitle, publishedAt } = video.snippet;
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const moveDetailVideoPage = () => {
		navigate(`/videos/watch/${video.id}`, { state: { video } });
	};
	const isList = type === 'list';

	const handleImageLoaded = () => {
		setIsLoading(true);
	};

	return (
		<li className={isList ? 'flex gap-1 mx-2 mb-2' : 'mx-2 mb-2'} onClick={moveDetailVideoPage}>
			<img src={thumbnails.medium.url} alt={title} onLoad={handleImageLoaded} className={`rounded ${isList ? 'w-60 mr-2' : 'w-full'} ${isLoading ? '' : 'bg-slate-600 w-full h-[180px]'}`} />
			<div>
				<p className='font-semibold my-2 line-clamp-2'>{title}</p>
				<p className='text-sm opacity-80'>{channelTitle}</p>
				<p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
			</div>
		</li>
	);
};

export default VideoCard;
