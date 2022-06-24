import { useState } from 'react';
import BlogList from './BlogList';


const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'Lorem ipsum...', author: 'Bird', id: 1},
    { title: 'Party', body: 'Lorem ipsum...', author: 'Tiger', id: 2},
    { title: 'Tips', body: 'Lorem ipsum...', author: 'Dog', id: 3},
  ]);

  const handleDelete = (id) => {
    const newBlog = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlog);
  }

  return (  
    <div className='home'>
      <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete}/>
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Tiger')} title="Tiger's blogs" /> */}
    
    </div>
  );
}

export default Home;