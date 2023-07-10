import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Images from './components/Images'
import './App.css'

export default function App() {
  const [query,setQuery] = useState("")
  const handleChildData = (data) =>{
    console.log(data)
    setQuery(data)
  }
  return (
    <>
        <Navbar sendToParent={handleChildData}/>
        {query?<Images exact query={query} key={query}/> : <Images exact query="random" key="random"/>}
    </>
  )
}
