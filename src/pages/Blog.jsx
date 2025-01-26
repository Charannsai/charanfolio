import React from 'react'
import Navigation from '../components/Navigation'
import BlogCard from '../components/cards/BlogCard'
import ContactSection from '../components/cards/ContactCard'
import { GridPattern } from '../backgrounds/GridPattern'

const Blog = () => {
  return (
    <div className=''>
      <Navigation/>
      <GridPattern/>
      <div className='mt-28 px-8 py-4'>
      <BlogCard />
      </div>
      <ContactSection/>
    </div>
  )
}

export default Blog
