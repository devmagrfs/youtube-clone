import { RelatedVideoType } from '../types/youtube';
import youtubeClient from './youtubeClient';
export default class Youtube {
	apiClient: youtubeClient;

	constructor(apiClient: youtubeClient) {
		this.apiClient = apiClient;
	}

	async search(keyword: string) {
		return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
	}

	async channelImageURL(id: string) {
		return this.apiClient.channels({ params: { part: 'snippet', id } }).then((response) => response.data.items[0].snippet.thumbnails.default.url);
	}

	async relatedVideos(id: string) {
		return this.apiClient
			.search({
				params: {
					part: 'snippet',
					maxResults: 25,
					type: 'video',
					relatedToVideoId: id,
				},
			})
			.then((response) => response.data.items.map((item: RelatedVideoType) => ({ ...item, id: item.id.videoId })));
	}

	async #searchByKeyword(keyword: string) {
		return this.apiClient
			.search({
				params: {
					part: 'snippet',
					maxResults: 25,
					type: 'video',
					q: keyword,
				},
			})
			.then((response) => response.data.items.map((item: RelatedVideoType) => ({ ...item, id: item.id.videoId })));
	}

	async #mostPopular() {
		return this.apiClient
			.trending({
				params: {
					part: 'snippet',
					maxResults: 25,
					chart: 'mostPopular',
				},
			})
			.then((response) => response.data.items);
	}
}
