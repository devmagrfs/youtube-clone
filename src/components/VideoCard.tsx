import React from 'react';
import { useNavigate } from 'react-router-dom';
import { VideoType } from '../pages/Main';
import { formatAgo } from '../util/date';

const VideoCard = ({ video }: { video: VideoType }) => {
	const { thumbnails, title, channelTitle, publishedAt } = video.snippet;
	const navigate = useNavigate();
	const moveDetailVideoPage = () => {
		navigate(`/video/watch/${video.id}`);
	};

	return (
		<li onClick={moveDetailVideoPage}>
			<img src={thumbnails.medium.url} alt={title} />
			<div>
				<p>{title}</p>
				<p>{channelTitle}</p>
				<p>{formatAgo(publishedAt, 'ko')}</p>
			</div>
		</li>
	);
};

export default VideoCard;
