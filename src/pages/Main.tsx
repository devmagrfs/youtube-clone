import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoCard from '../components/VideoCard';

interface TrendingVideo {
	etag: string;
	id: string;
	kind: string;
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

interface TrendingList {
	etag: string;
	items: TrendingVideo[];
	kind: string;
	nextPageToken: string;
	pageInfo: {
		resultsPerPage: number;
		totalResults: number;
	};
}

const Main = () => {
	const [trending, setTrending] = useState<TrendingVideo[]>([]);
	const getTrendingList = async () => {
		const trendingList = await axios.get('data/trending.json');
		console.log(trendingList.data.items);
		setTrending(trendingList.data.items);
	};

	useEffect(() => {
		getTrendingList();
	}, []);
	return (
		<main className='flex flex-wrap'>
			{trending.map((video) => {
				return (
					<VideoCard
						title={video.snippet.title}
						channelTitle={video.snippet.channelTitle}
						publishedAt={video.snippet.publishedAt}
						thumbnails={video.snippet.thumbnails.default.url}
						movieId={video.id}
					/>
				);
			})}
		</main>
	);
};

export default Main;
