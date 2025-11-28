import HomePage from './components/pages/HomePage';
import NotFoundPage from './components/pages/NotFoundPage';

const queryClient = new QueryClient();

export default function App() {

  return (
    <QueryClientProvider client={queryClient} >
    <BrowserRouter >
        <Routes>  // order matters, notfound must be last
            <Route path='/' element={ <AboutUsPage /> } />
            <Route path='/home' element={ <HomePage /> } />
            <Route path='*' element={ <NotFoundPage /> } />
        </Routes>
    </BrowserRouter>
    </QueryClientProvider> 
  );
}