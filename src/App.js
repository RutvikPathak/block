import React, { useState } from 'react'; // Importing React and useState hook
import './App.css'; // Importing CSS file for styling
import Header from './Components/header'; // Importing Header component

function App() {
  return (
    <div className="App">
      <Header name="Rutvik Pathak" /> {/* Using the Header component and passing name as a prop */}
      <main className="blog-posts">
        <div className="blog-post-container">
          <BlogPost 
            title="First Post" // Passing title as a prop
            date="May 31, 2024" // Passing date as a prop
            body="This is the body of the First post." // Passing body as a prop
          />
          <BlogPost 
            title="Second Post" // Passing title as a prop
            date="May 29, 2024" // Passing date as a prop
            body="This is the body of the Second post." // Passing body as a prop
          />
          <BlogPost 
            title="Third Post" // Passing title as a prop
            date="May 22, 2024" // Passing date as a prop
            body="This is the body of the Third post." // Passing body as a prop
          />
        </div>
      </main>
    </div>
  );
}

function BlogPost({ title, date, body }) { // Receiving props in the BlogPost component
  const [likes, setLikes] = useState(0); // Using useState hook to manage likes state
  const [isExpanded, setIsExpanded] = useState(false); // Using useState hook to manage expanded state

  const handleLike = () => {
    setLikes(likes + 1); // Updating likes state
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded); // Toggling expanded state
  };

  // Inline styles
  const postTitleStyle = {
    cursor: 'pointer',
    color: '#004d40',
  };

  const postMetaStyle = {
    color: '#00796b',
    fontSize: '0.9em',
  };

  const postBodyStyle = {
    fontSize: '1em',
    lineHeight: '1.6',
    color: '#004d40',
  };

  const likeButtonStyle = {
    backgroundColor: '#00796b',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div className="blog-post">
      <h2 
        onClick={toggleExpand} 
        style={postTitleStyle} // Applying inline style
        className="post-title"
      >
        {title} {/* Displaying title prop */}
      </h2>
      <p style={postMetaStyle} className="post-meta">{date}</p> {/* Displaying date prop */}
      {isExpanded && <p style={postBodyStyle} className="post-body">{body}</p>} {/* Conditionally displaying body prop */}
      <div className="like-container">
        <button 
          onClick={handleLike} 
          style={likeButtonStyle} // Applying inline style
          className="like-button"
        >
          Like
        </button>
        <span className="like-count">{likes} Likes</span> {/* Displaying likes state */}
      </div>
    </div>
  );
}

export default App;
