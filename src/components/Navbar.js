import { keyboard } from '@testing-library/user-event/dist/keyboard'
import React, { useState } from 'react'

export default function Navbar(props) {
  const [query,setQuery] = useState("")
  const handlSearchbtn = () =>{
    props.sendToParent(query)
    setQuery("")
  }
  const handleOnChange = (e) =>{
    setQuery(e.target.value)
  }
  const handleEnter = (e) =>{
    if(e.key === 'Enter'){
      handlSearchbtn();
    }
  }
  return (
    <>
      <div className="w-full flex items-center py-10" style={{backgroundColor:"#342E37"}}>
        <div className="max-w-md mx-auto w-full">
          <div className="flex">
            <input type="search" className="outline-none p-2.5 rounded-bl border border-gray-500 rounded-tl w-full text-lg" placeholder="Type the keywords...." value={query} onChange={handleOnChange}/>
            <button disabled={!query} className=" bg-blue-600 px-6 py-2.5 text-xl text-white rounded-tr rounded-br  disabled:bg-gray-600" onClick={handlSearchbtn} onKeyDown={handleEnter}>search</button>
          </div>
        </div>
      </div>
    </>
  )
}
