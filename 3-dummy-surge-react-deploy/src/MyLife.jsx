import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const MyLife = ({name,age}) => {
    // console.log(prop.age);
  return (
    <>
    <Navbar/>
    <div>Hello from {name}.</div>
    <p className="para1">My age is {age}.</p>
    <Footer/>
    </>
  )
}

export default MyLife