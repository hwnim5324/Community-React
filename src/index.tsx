import ReactDOM from 'react-dom/client';
import Router from './Router';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import GlobalStyles from './styles/GlobalStyles';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<Global styles={GlobalStyles}/>
		<Router />
	</BrowserRouter>
);

reportWebVitals();
