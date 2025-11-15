import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/home-page/index.jsx';
import AboutUs from './components/about-page/index.jsx';
// import NotFoundPage from './components/pages/NotFoundPage';

export default function App() {

  return ( // order matters, notfound must be last; got to add <Route path='*' element={ <NotFoundPage /> } /> at the bottom
    <BrowserRouter > 
        <Routes>
            <Route path='/about' element={ <AboutUs /> } />
            <Route path='/home' element={ <HomePage /> } />
        </Routes>
    </BrowserRouter>
  );
}