import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedList from '../components/RelatedList';

const Detail = () => {
	const {
		state: { video },
	} = useLocation();

	const { title, channelId, channelTitle, description } = video.snippet;

	return (
		<section>
			<article>
				<iframe id='player' data-type='text/html' width='100%' height='640' src={`http://www.youtube.com/embed/${video.id}`} frameBorder='0' />
				<div>
					<h2>{title}</h2>
					<ChannelInfo id={channelId} name={channelTitle} />
					<pre>{description}</pre>
				</div>
			</article>
			<section>
				<RelatedList id={video.id} />
			</section>
		</section>
	);
};

export default Detail;
