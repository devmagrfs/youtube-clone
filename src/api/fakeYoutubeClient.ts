import axios, { AxiosRequestConfig } from 'axios';
import { ChannelDetailType, RelatedVideoListType, TrendingListType } from '../types/youtube';

export default class FakeYoutubeClient {
	async search({ params }: AxiosRequestConfig<string>) {
		return params.relatedToVideoId ? axios.get<RelatedVideoListType>('/data/related.json') : axios.get('/data/keyword.json');
	}

	async trending() {
		return axios.get<TrendingListType>('/data/trending.json');
	}

	async channels() {
		return axios.get<ChannelDetailType>('/data/channel_detail.json');
	}
}
