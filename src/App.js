import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="top-bar">
        <div className="logo">Rutvik Blog</div>
        <nav className="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main className="blog-posts">
        <div className="blog-post-container">
          <BlogPost 
            title="First Post" 
            date="May 31, 2024" 
            body="This is the body of the First post."
          />
          <BlogPost 
            title="Second Post" 
            date="May 29, 2024"  
            body="This is the body of the Second post."
          />
          <BlogPost 
            title="Third Post" 
            date="May 22, 2024" 
            body="This is the body of the Third post."
          />
        </div>
      </main>
    </div>
  );
}

function BlogPost({ title, date, body }) {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p className="post-meta">{date}</p>
      <p className="post-body">{body}</p>
    </div>
  );
}

export default App;
