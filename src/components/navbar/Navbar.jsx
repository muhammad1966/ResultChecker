import React, { useState } from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'

const Nav = () => {
    return (
        <>
            <div>
                  <NavLink
                      to=''
                      className={({ isActive, isPending }) => 
                          isActive ? "active": 'inactive'
                      }
                  >
                      Home
                  </NavLink>
              </div>
              <div>
                  <NavLink
                      to="result"
                      className={({ isActive, isPending }) => 
                        isActive ? "active": 'inactive'
                      }
                  >
                      Check Result
                  </NavLink>
              </div>
              <div>
              <NavLink
                      to="hall"
                      className={({ isActive, isPending }) => 
                        isActive ? "active": 'inactive'                      }
                  >
                      Hall of Fame
                  </NavLink>
              </div>
              <div>
              <NavLink
                      to="about"
                      className={({ isActive, isPending }) => 
                        isActive ? "active": 'inactive'                      }
                  >
                      About
                  </NavLink>
              </div>
              <div>
              <a
                      href='#footer'
                      className='inactive'                      
                  >
                      Contact Us
                  </a>
              </div>
        </>
    )
}

export const Navbar = () => {
  const [toggled, setToggle] = useState(false)  
  return (
      <div className='navbar-div'>
          <div className='logo-div'>
              <h1>
                  RC
              </h1>
          </div>
          <div className='nav-div'>
            <Nav/>
          </div>
          <div className='navbar-div-mob'>
              {toggled ? <RiCloseLine size={27} color="#fff" onClick={() => setToggle(false)} />
                : <RiMenu3Line size={27} color="#fff" onClick={() => setToggle(true)} />
              }

              {toggled && (
                  <div className='nav-mob'>
                    <Nav/>
                  </div>
              )}
          </div>
      </div>
    )
}
