// components/Posts.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Posts = () => {
    const [posts, setPosts] = useState([
        { id: 1, title: 'Mi primer artículo', content: 'Contenido del primer artículo...', likes: 0 },
        { id: 2, title: 'React Router DOM', content: 'Aprendiendo sobre rutas en React...', likes: 0 },
        { id: 3, title: 'Formularios en React', content: 'Cómo manejar formularios...', likes: 0 }
    ]);

    const handleLike = (id) => {
        setPosts(posts.map(post =>
            post.id === id ? { ...post, likes: post.likes + 1 } : post
        ));
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Artículos del Blog</h1>
            <div>
                {posts.map(post => (
                    <div key={post.id} style={{ border: '1px solid #ddd', padding: '15px', margin: '10px 0' }}>
                        <h3>{post.title}</h3>
                        <p>{post.content.substring(0, 100)}...</p>
                        <Link to={`/posts/${post.id}`}>Leer más</Link>
                        <div style={{ marginTop: '10px' }}>
                            <button onClick={() => handleLike(post.id)}>👍 Like</button>
                            <span style={{ marginLeft: '8px' }}>{post.likes} likes</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;
