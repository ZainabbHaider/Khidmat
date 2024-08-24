import './App.css';
import Home from './pages/Homepage';
import BlogPage from './pages/BlogPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './pages/not-found';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/events" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
