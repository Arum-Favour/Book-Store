import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import BookPage from './pages/Books';
import NewRelease from './pages/NewRelease'
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import './index.css';

function App() {

  return (
   <Router>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/books" element={<BookPage />} />
    <Route path="/new-books" element={<NewRelease />} />
    <Route path="/contactUs" element={<ContactUs />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="*" element={<h1>404: Page Not Found</h1>} />
    </Routes>
   </Router>
  )
}

export default App
