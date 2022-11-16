import { Route, Routes } from 'react-router-dom';
import Main from './pages/MainPage/Index';
import SignInPage from './pages/SignInPage/Index';
import SignUpPage from './pages/SignUpPage/Index';

function Router() {
	return (
		<Routes>
			<Route path='/' element={<Main />}/>
			<Route path='/signin' element={<SignInPage />}/>
			<Route path='/signup' element={<SignUpPage />}/>
		</Routes>
	);
}

export default Router;