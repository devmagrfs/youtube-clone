import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { VideoType } from '../types/youtube';
import VideoCardSkeleton from '../components/VideoCardSkeleton';

const Main = () => {
	const { keyword } = useParams() as { keyword: string };
	const youtube = useYoutubeApi();
	const { isLoading, error, data: videos } = useQuery(['videos', keyword], () => youtube.search(keyword), { staleTime: 1000 * 60 * 1 });

	return (
		<>
			{error && <p>Something is wrong...</p>}
			<ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4 px-4'>
				{isLoading &&
					new Array(25).fill(1).map((_, i) => {
						return <VideoCardSkeleton key={i} />;
					})}
				{!isLoading && videos && videos.map((video: VideoType) => <VideoCard video={video} key={video.id} />)}
			</ul>
		</>
	);
};

export default Main;
