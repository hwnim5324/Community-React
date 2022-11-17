import { Route, Routes } from 'react-router-dom';
import Main from './pages/MainPage/Index';
import SignInPage from './pages/SignInPage/Index';
import SignUpPage from './pages/SignUpPage/Index';
import FindIdPage from './pages/FindIdPage/Index';
import FindPwPage from './pages/FindPwPage/Index';

function Router() {
	return (
		<Routes>
			<Route path='/' element={<Main />}/>
			<Route path='/signin' element={<SignInPage />}/>
			<Route path='/signup' element={<SignUpPage />}/>
			<Route path='/findid' element={<FindIdPage />}/>
			<Route path='/findpw' element={<FindPwPage />}/>
		</Routes>
	);
}

export default Router;