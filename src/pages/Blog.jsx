import React from 'react'
import Navigation from '../components/Navigation'
import { CodeBlocks } from '../backgrounds/CodeBlocks'
import BlogCard from '../components/cards/BlogCard'
import ContactSection from '../components/cards/ContactCard'

const Blog = () => {
  return (
    <div>
        <CodeBlocks/>
      <Navigation/>
      <div className='mt-28 px-8 py-8'>
      <BlogCard />
      </div>
      <ContactSection/>
    </div>
  )
}

export default Blog
