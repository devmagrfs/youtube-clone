import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import DetailSkeleton from '../components/DetailSkeleton';
import RelatedList from '../components/RelatedList';

const Detail = () => {
	const {
		state: { video },
	} = useLocation();
	const [isVideoLoading, setIsVideoLoading] = useState(true);

	const { title, channelId, channelTitle, description } = video.snippet;

	const handleVideoLoaded = () => {
		setIsVideoLoading(false);
	};

	return (
		<section className='flex flex-col lg:flex-row'>
			{isVideoLoading && <DetailSkeleton />}
			<article className={`basis-4/6 ${isVideoLoading ? 'hidden' : ''}`}>
				<iframe id='player' data-type='text/html' width='100%' height='640' src={`https://www.youtube.com/embed/${video.id}`} frameBorder='0' title={title} onLoad={handleVideoLoaded} />
				<div className='p-8'>
					<h2 className='text-xl font-bold'>{title}</h2>
					<ChannelInfo id={channelId} name={channelTitle} />
					<pre className='whitespace-pre-wrap'>{description}</pre>
				</div>
			</article>
			<section className='basis-2/6'>
				<RelatedList id={video.id} />
			</section>
		</section>
	);
};

export default Detail;
