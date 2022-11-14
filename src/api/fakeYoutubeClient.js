import axios from 'axios';

export default class FakeYoutubeClient {
  async search({ params }) {
    return params.relatedToVideoId
      ? axios.get('/data/related.json')
      : axios.get('/data/keyword.json');
  }

  async trending() {
    return axios.get('/data/trending.json');
  }

  async channels() {
    return axios.get('/data/channel_detail.json');
  }
}