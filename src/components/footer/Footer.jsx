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
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet by musa and folly.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
      </div>
      <div className='app-footer_logos'>
          <SocialIcon className="socicon"  bgColor='#555555' fgColor='#2D313A' url='www.x.com' href='www.x.com' />
          <SocialIcon className="socicon"  bgColor='#555555' fgColor='#2D313A' url='www.facebook.com'/>
          <SocialIcon className="socicon"  bgColor='#555555' fgColor='#2D313A' url='www.pinterest.com'/>
          <SocialIcon className="socicon"  bgColor='#555555' fgColor='#2D313A' url='www.tiktok.com'/>
          <SocialIcon className="socicon"  bgColor='#555555' fgColor='#2D313A' url='www.instagram.com'/>
          <SocialIcon className="socicon"  bgColor='#555555' fgColor='#2D313A'  url='www.linkedin.com'/> 
      </div>
      <div className='app-footer_copy'>
       <h4> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam illum eligendi praesentium asperiores doloremque iste libero cumque adipisci laborum amet!</h4>
      </div>
    </div>
  )
}
