import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import Aboutus from './pages/Aboutus.jsx';
import Blogs from './pages/Blogs.jsx';
import BlogDetails from "./pages/BlogDetails";
import Contactus from './pages/Contactus.jsx';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
