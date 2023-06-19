import React, { useEffect, useState } from 'react'
import './NavBar.css'
function NavBar() {
    const [show,handleShow]=useState(false);
    useEffect(
        ()=>{
            window.addEventListener("scroll",()=>{
                if(window.scrollY>100)
                {
                        handleShow(true);
                }
                else {
                    handleShow(false);
                }
            });
            return ()=>{
               // window.removeEventListener("scroll");
            };
        },[]
    )
  return ( 
         <div className={`container-fluid ${show && "nav_black"}`}>
            <img className='navbar_netflix_logo' src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt=''></img>
            <img className ='navbar_profile_logo' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=''></img>
         </div>
  )
}

export default NavBar
