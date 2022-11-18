export interface VideoType {
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

export interface TrendingListType {
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

export interface RelatedVideoType {
	etag: string;
	id: {
		kind: string;
		videoId: string;
	};
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

export interface RelatedVideoListType {
	kind: string;
	etag: string;
	nextPageToken: string;
	regionCode: string;
	pageInfo: {
		totalResults: number;
		resultsPerPage: number;
	};
	items: RelatedVideoType[];
}

export interface ChannelDetailType {
	kind: string;
	etag: string;
	pageInfo: {
		totalResults: number;
		resultsPerPage: number;
	};
	items: [
		{
			kind: string;
			etag: string;
			id: string;
			snippet: {
				title: string;
				description: string;
				customUrl: string;
				publishedAt: string;
				thumbnails: {
					default: {
						url: string;
						width: number;
						height: number;
					};
					medium: {
						url: string;
						width: number;
						height: number;
					};
					high: {
						url: string;
						width: number;
						height: number;
					};
				};
				localized: {
					title: string;
					description: string;
					country: string;
				};
			};
		}
	];
}
