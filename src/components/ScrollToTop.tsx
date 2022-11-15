import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const ScrollToTop = () => {
	const { pathname } = useLocation();
	const navigationType = useNavigationType();

	useEffect(() => {
		if (navigationType === 'PUSH') {
			document.documentElement.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth',
			});
		} else {
			document.documentElement.scrollTo({
				top: 0,
				left: 0,
			});
		}
	}, [pathname]);

	return null;
};

export default ScrollToTop;
