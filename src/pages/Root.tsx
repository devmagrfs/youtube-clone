import React from 'react';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Header from '../components/Header';

const queryClient = new QueryClient();

const Root = () => {
	return (
		<>
			<Header />
			<QueryClientProvider client={queryClient}>
				<Outlet />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</>
	);
};

export default Root;
