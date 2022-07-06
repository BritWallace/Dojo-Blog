import { useEffect, useState } from 'react';
import BlogList from './BlogList';


const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const handleDelete = (id) => {
    const newBlog = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlog);
  }

  useEffect (() => {
    fetch('http://localhost:8000/blogs') 
        .then(res => { 
          return res.json();
        }) 
        .then((data) => { 
          setBlogs(data)
          setIsPending(false);
        // console.log(data);
        })
  }, [])

  return (  
    <div className='home'>
      {isPending && <div>Loading...</div>}
      { blogs && <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete}/>}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Tiger')} title="Tiger's blogs" /> */}

    
    </div>
  );
}

export default Home;