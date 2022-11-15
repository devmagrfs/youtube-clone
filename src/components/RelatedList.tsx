import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import VideoCard from './VideoCard';
import { VideoType } from '../types/youtube';
import VideoCardSkeleton from './VideoCardSkeleton';

interface RelatedListProp {
	id: string;
}

const RelatedList = ({ id }: RelatedListProp) => {
	const { youtube } = useYoutubeApi();
	const { error, data: videos } = useQuery(['related', id], () => youtube.relatedVideos(id), { staleTime: 1000 * 60 * 5 });

	let isLoading = true;
	const isList = true;

	return (
		<>
			{error && <p>Something is wrong...</p>}
			<ul>
				{isLoading && !videos
					? new Array(25).fill(1).map((_, i) => {
							return <VideoCardSkeleton key={i} isList={isList} />;
					  })
					: videos.map((video: VideoType) => <VideoCard video={video} key={video.id} type='list' />)}
			</ul>
		</>
	);
};

export default RelatedList;
