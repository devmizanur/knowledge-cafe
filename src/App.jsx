import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
 const [bookmarks,setBookmarks]=useState([]);

 const [readingTime,setReadingTime]=useState(0)

 const handelBookmarks= blog =>{
  const newBookmark=[...bookmarks,blog]
  setBookmarks(newBookmark)
 }

 const handelReadingTime =time=>{
  setReadingTime(readingTime+time);
 }

  return (
    <>
  <Header></Header>
  <div className='max-w-6xl mx-auto flex '>
  <Blogs handelReadingTime={handelReadingTime} handelBookmarks={handelBookmarks}></Blogs>
  <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
    </div>

    </>
  )
}

export default App
