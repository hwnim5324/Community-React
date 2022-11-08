import ReactDOM from 'react-dom/client';
import Router from './Router';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<Router />
	</BrowserRouter>
);

reportWebVitals();
