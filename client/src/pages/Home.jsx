import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import Priority from '../components/Priority'
import BottomBanner from '../components/BottomBanner'
import NewsLetter from '../components/NewsLetter'
import AchievementBanner from '../components/Achievementbanner'
import BlogBanner from '../components/BlogBanner'
import SlideBar from '../components/SlideBar'


const Home = () => {
  return (
    <div className='mt-10'>
        <MainBanner/>
        <AchievementBanner/>
        <BlogBanner/>
        <Categories/>
        <Priority/>
        <SlideBar/>
        <BottomBanner/>
        <NewsLetter/>
    </div>
  )
}

export default Home