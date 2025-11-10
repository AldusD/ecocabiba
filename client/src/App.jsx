import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/pages/HomePage';
import NotFoundPage from './components/pages/NotFoundPage';

export default function App() {

  return ( // order matters, notfound must be last
    <BrowserRouter > 
        <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='*' element={ <NotFoundPage /> } />
        </Routes>
    </BrowserRouter>
  );
}