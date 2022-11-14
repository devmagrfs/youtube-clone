import React from 'react';
import { useNavigate } from 'react-router-dom';
import { VideoType } from '../types/youtube';
import { formatAgo } from '../util/date';

interface VideoCardProp {
	video: VideoType;
	type?: string;
}

const VideoCard = ({ video, type }: VideoCardProp) => {
	const { thumbnails, title, channelTitle, publishedAt } = video.snippet;
	const navigate = useNavigate();
	const moveDetailVideoPage = () => {
		navigate(`/videos/watch/${video.id}`, { state: { video } });
	};
	const isList = type === 'list';

	return (
		<li className={isList ? 'flex gap-1 m-2' : ''} onClick={moveDetailVideoPage}>
			<img src={thumbnails.medium.url} alt={title} className={isList ? 'w-60 mr-2' : 'w-full'} />
			<div>
				<p className='font-semibold my-2 line-clamp-2'>{title}</p>
				<p className='text-sm opacity-80'>{channelTitle}</p>
				<p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
			</div>
		</li>
	);
};

export default VideoCard;
