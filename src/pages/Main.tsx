import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export interface VideoType {
	etag?: string;
	id: string;
	kind?: string;
	snippet: {
		categoryId: string;
		channelId: string;
		channelTitle: string;
		defaultAudioLanguage: string;
		description: string;
		liveBroadcastContent: string;
		localized: {
			description: string;
			title: string;
		};
		publishedAt: string;
		tags: [string];
		thumbnails: {
			default: {
				height: number;
				url: string;
				width: number;
			};
			high: {
				height: number;
				url: string;
				width: number;
			};
			maxres: {
				height: number;
				url: string;
				width: number;
			};
			medium: {
				height: number;
				url: string;
				width: number;
			};
			standard: {
				height: number;
				url: string;
				width: number;
			};
		};
		title: string;
	};
}

export interface TrendingList {
	etag: string;
	items: VideoType[];
	kind: string;
	nextPageToken: string;
	pageInfo: {
		resultsPerPage: number;
		totalResults: number;
	};
	regionCode?: string;
}

const Main = () => {
	const { keyword } = useParams();
	const { youtube } = useYoutubeApi();
	const { isLoading, error, data: videos } = useQuery(['videos', keyword], () => youtube.search(keyword));

	return (
		<>
			{isLoading && <p>Loading...</p>}
			{error && <p>Something is wrong...</p>}
			{videos && (
				<ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
					{videos.map((video: VideoType) => (
						<VideoCard video={video} key={video.id} />
					))}
				</ul>
			)}
		</>
	);
};

export default Main;
