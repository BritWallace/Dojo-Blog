import { useState } from 'react';


const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'Lorem ipsum...', author: 'Bird', id: 1},
    { title: 'Party', body: 'Lorem ipsum...', author: 'Tiger', id: 2},
    { title: 'Tips', body: 'Lorem ipsum...', author: 'Dog', id: 3},
  ]);

  return (  
    <div className='home'>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}

    
    </div>
  );
}

export default Home;