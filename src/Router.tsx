import { Route, Routes } from 'react-router-dom';
import Main from './pages/MainPage/Index';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Main />}/>
        </Routes>
    );
}

export default Router;