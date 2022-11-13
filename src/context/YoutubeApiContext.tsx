import { createContext, useContext } from 'react';
import FakeYoutubeClient from '../api/fakeYoutubeClient';
import YoutubeClient from '../api/youtubeClient';
import Youtube from '../api/youtube';

export const YoutubeApiContext = createContext<any | undefined>(undefined);

const client = new FakeYoutubeClient();
// const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }: { children: React.ReactNode }) {
	return <YoutubeApiContext.Provider value={{ youtube }}>{children}</YoutubeApiContext.Provider>;
}

export function useYoutubeApi() {
	return useContext(YoutubeApiContext);
}
