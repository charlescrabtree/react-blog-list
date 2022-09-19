import React from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import BlogCard from './components/BlogCard/BlogCard';
import useBlogs from './hooks/blogs';

function App() {
  const blogs = useBlogs();
  return (
    <section className="main">
      <Header />
      {/* add your main component here */}
      {blogs.map((itm) => (
        <BlogCard {...itm} key={itm.id} />
      ))}
      <Footer />
    </section>
  );
}

export default App;
