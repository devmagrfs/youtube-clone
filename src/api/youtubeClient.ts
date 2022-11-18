import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ChannelDetailType, RelatedVideoListType, TrendingListType } from '../types/youtube';

export default class YoutubeClient {
	httpClient: AxiosInstance;

	constructor() {
		this.httpClient = axios.create({
			baseURL: 'https://www.googleapis.com/youtube/v3',
			params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
		});
	}

	async search(params: AxiosRequestConfig<string>) {
		return this.httpClient.get<RelatedVideoListType>('search', params);
	}

	async trending(params: AxiosRequestConfig<string>) {
		return this.httpClient.get<TrendingListType>('videos', params);
	}

	async channels(params: AxiosRequestConfig<string>) {
		return this.httpClient.get<ChannelDetailType>('channels', params);
	}
}
