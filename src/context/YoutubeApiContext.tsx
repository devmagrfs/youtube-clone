import { createContext, useContext } from 'react';
import YoutubeClient from '../api/youtubeClient';
import Youtube from '../api/youtube';

export const YoutubeApiContext = createContext<Youtube | null>(null);

const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }: { children: React.ReactNode }) {
	console.log(youtube);
	return <YoutubeApiContext.Provider value={youtube}>{children}</YoutubeApiContext.Provider>;
}

export function useYoutubeApi() {
	const state = useContext(YoutubeApiContext);
	if (!state) throw new Error('Cannot find YoutubeApiContext');
	return state;
}
