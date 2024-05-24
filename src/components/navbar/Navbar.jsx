import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
      <div className='navbar-div'>
          <div className='logo-div'>
              <h1>
                  RC
              </h1>
          </div>
          <div className='nav-div'>
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
                      to="wof"
                      className={({ isActive, isPending }) => 
                        isActive ? "active": 'inactive'                      }
                  >
                      Wall of Fame
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
              <NavLink
                      to="footer"
                      className={({ isActive, isPending }) => 
                        isActive ? "active": 'inactive'                      }
                  >
                      Contact Us
                  </NavLink>
              </div>
          </div>
      </div>
    )
}
