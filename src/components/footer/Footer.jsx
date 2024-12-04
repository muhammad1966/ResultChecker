import React from 'react'
import './footer.css'
import { SocialIcon } from 'react-social-icons'



export const Footer = () => {
  
  return (
    <div className='app-footer' id='footer'>
      <div className='app-footer_content'>
        <div>
          <ul>
            <h1>NICOSIA.</h1>
            <a href="bsmuhammad352@gmail.com">bsmuhammad352@gmail.com</a>
            <p>+905428786574</p>
            <p>Yurt 4, Near East University</p>
          </ul>
        </div>
        <div>
          <ul>
            <h1>KANO.</h1>
            <a href="muhammadsunusi909@gmail.com">muhammadsunusi909@gmail.com</a>
            <p>+2349162925848</p>
            <p>Cikin gari, Kano Municipal</p>
          </ul>
        </div>
        <div>
          <ul>
            <a href='https://neu.edu.tr/?lang=en'>Go to NEU main page.</a>
            <br />
            <a href='https://github.com/muhammad1966/ResultChecker'>This site's github page.</a>
            <br />
            <a href='https://uzebim.neu.edu.tr/'>Go to Uzebim.</a>
          </ul>
        </div>
      </div>
      <div className='app-footer_logos'>
          <SocialIcon className="socicon"  bgColor='#918f8f' fgColor='#2D313A' url='https://x.com/MuhammadSung' />
          <SocialIcon className="socicon"  bgColor='#918f8f' fgColor='#2D313A' url='https://www.facebook.com/muhd.sunusi.925'/>
          <SocialIcon className="socicon"  bgColor='#918f8f' fgColor='#2D313A' url='https://www.pinterest.com/bsmuhammad352/'/>
          <SocialIcon className="socicon"  bgColor='#918f8f' fgColor='#2D313A' url='https://www.instagram.com/sanusi.muhammadbello/'/>
          <SocialIcon className="socicon"  bgColor='#918f8f' fgColor='#2D313A'  url='www.linkedin.com'/> 
      </div>
      <div className='app-footer_copy'>
       <h4>KiwiCodes2024©</h4>
      </div>
    </div>
  )
}
