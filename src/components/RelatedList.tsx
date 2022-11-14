import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import VideoCard from './VideoCard';
import { VideoType } from '../types/youtube';

interface RelatedListProp {
	id: string;
}

const RelatedList = ({ id }: RelatedListProp) => {
	const { youtube } = useYoutubeApi();
	const { isLoading, error, data: videos } = useQuery(['related', id], () => youtube.relatedVideos(id), { staleTime: 1000 * 60 * 5 });
	return (
		<>
			{isLoading && <p>Loading...</p>}
			{error && <p>Something is wrong...</p>}
			{videos && (
				<ul>
					{videos.map((video: VideoType) => (
						<VideoCard video={video} key={video.id} type='list' />
					))}
				</ul>
			)}
		</>
	);
};

export default RelatedList;
