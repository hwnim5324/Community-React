import { Route, Routes } from 'react-router-dom';
import Main from './pages/MainPage/Index';
import SignInPage from './pages/SignInPage/Index';

function Router() {
	return (
		<Routes>
			<Route path='/' element={<Main />}/>
			<Route path='/signin' element={<SignInPage />}/>
		</Routes>
	);
}

export default Router;