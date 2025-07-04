import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import BlogLilst from '../components/BlogLilst'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <BlogLilst/>   
        <NewsLetter/>
        <Footer/>
    </>
  )
}

export default Home;