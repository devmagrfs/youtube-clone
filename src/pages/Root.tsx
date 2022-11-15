import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Header from '../components/Header';
import { YoutubeApiProvider } from '../context/YoutubeApiContext';
import ScrollToTop from '../components/ScrollToTop';

const queryClient = new QueryClient();

const Root = () => {
	return (
		<>
			<ScrollToTop />
			<Header />
			<YoutubeApiProvider>
				<QueryClientProvider client={queryClient}>
					<Outlet />
					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
			</YoutubeApiProvider>
		</>
	);
};

export default Root;
