// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import NewPost from './pages/NewPost';
import PostDetail from './components/PostDetail';
function App() {
    return (
        <div className="app">
            <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
                <Link to="/" style={{ marginRight: '15px' }}>Inicio</Link>
                <Link to="/posts" style={{ marginRight: '15px' }}>Artículos</Link>
                <Link to="/new-post">Nuevo Artículo</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/new-post" element={<NewPost />} />
                <Route path="/posts/:id" element={<PostDetail />} />
            </Routes>
        </div>
    );
}
export default App;