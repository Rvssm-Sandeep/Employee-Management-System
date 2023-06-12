import React,{useState,useEffect} from 'react'
import NavbarMain from "../navbar/NavbarMain"
import Footer from "../footer/Footer"
import { Outlet,useLocation } from 'react-router-dom'
import "./RootLayout.css"
function RootLayout() {
  let location=useLocation();
   let [path,setPath]=useState("none");
   useEffect(()=>{
    let url=location.pathname.replace("/","")
    if(url.length===0){
    setPath("home")
   }
   else{
    setPath(url)
   }
},[location])
  return (
    <div  className={path}>
      <div className='head'>
      <NavbarMain/>
      </div>
     
     {/* placeholder */}
     <div className='main' >
     <Outlet/>
     </div>
    {/* <div className='down'>
     <Footer/>
     </div> */}
     
    </div>
  )
}

export default RootLayout