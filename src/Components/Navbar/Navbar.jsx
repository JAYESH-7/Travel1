import React from 'react'
import './Navbar.css'
import{MdOutlineTravelExplore} from 'react-icons/md'
import{AiFillCloseCircle} from 'react-icons/ai'
import{TbGridDots} from 'react-icons/tb'

const Navbar = () => {
  return (
     <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv"> 
        <a href="a" className="logo">
            <h1>< MdOutlineTravelExplore className='icon'/>   Travel.</h1>
        </a>
        </div>
        <div className="navBar">
         <ul className="navLists flex">
            <li className="navItem">
                <a href="a" className="navLink"> Home </a>
            </li>
            <li className="navItem">
                <a href="a" className="navLink"> Packages </a>
            </li>
            <li className="navItem">
                <a href="a" className="navLink"> Shop </a>
            </li>
            <li className="navItem">
                <a href="a" className="navLink"> About </a>
            </li>
            <li className="navItem">
                <a href="a" className="navLink"> Pages </a>
            </li>
            <li className="navItem">
                <a href="a" className="navLink"> News </a>
            </li>
            <li className="navItem">
                <a href="a" className="navLink"> Contact </a>
            </li>

            <button className="btn">
              <a href="a" > BOOK NOW
                </a>  
            </button>
            </ul>   
            <div className="closeNavBar">
                <AiFillCloseCircle className='icon' /> 
            </div>
        </div>
              
          <div className="toggleNavbar">
            <TbGridDots className='icon'/>
        </div>    
          
      </header>

     </section>
      
  )
}

export default Navbar