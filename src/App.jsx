import './App.css';
import { HomePage, AboutPage, ContactPage, BlogPage, Error404Page} from './pages';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path='/about' Component={AboutPage}/>
        <Route path='/contact' Component={ContactPage}/>
        <Route path='/blog' Component={BlogPage}/>
        <Route path='*' Component={Error404Page}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
