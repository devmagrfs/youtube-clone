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
