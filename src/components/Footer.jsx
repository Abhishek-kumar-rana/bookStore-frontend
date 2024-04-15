import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div>
        <hr />
    <footer className="footer footer-center p-10  text-base-900 rounded dark:border">
  <nav className="grid grid-flow-col gap-4">
    <Link to="/about" className="link link-hover">About us</Link>
    <Link to="/contact" className="link link-hover" >Contact</Link>
    <a className="link link-hover">Policies</a>
    <a className="link link-hover">Help</a>
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4">
  <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B1tUQKAPQSjehLvk%2Bcbk28w%3D%3D">
  <svg width="35px" height="35px" viewBox="0 0 16 16" className='fill-current' xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M3 1a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2H3zm1.102 4.297a1.195 1.195 0 100-2.39 1.195 1.195 0 000 2.39zm1 7.516V6.234h-2v6.579h2zM6.43 6.234h2v.881c.295-.462.943-1.084 2.148-1.084 1.438 0 2.219.953 2.219 2.766 0 .087.008.484.008.484v3.531h-2v-3.53c0-.485-.102-1.438-1.18-1.438-1.079 0-1.17 1.198-1.195 1.982v2.986h-2V6.234z" />
</svg>
  </a>
  <a href="mailto:lalanrana01001@email.com">
  <svg  xmlns="http://www.w3.org/2000/svg" 
	 width="35px" height="35px" viewBox="0 0 52 52" className='fill-current'  >
<g>
	<path d="M24.9,30.1c0.6,0.6,1.5,0.6,2.1,0l22.6-21C50,8.3,49.9,7,48.3,7L3.6,7.1c-1.2,0-2.2,1.1-1.3,2.1L24.9,30.1z
		"/>
	<path d="M50,17.3c0-1-1.2-1.6-2-0.9L30.3,32.7c-1.2,1.1-2.7,1.7-4.3,1.7s-3.1-0.6-4.3-1.6L4.1,16.4
		c-0.8-0.7-2-0.2-2,0.9C2,17,2,40,2,40c0,2.2,1.8,4,4,4h40c2.2,0,4-1.8,4-4C50,34,50,21.8,50,17.3z"/>
</g>
</svg>
  </a>
  <a href="mailto:your@email.com">
  <svg width="35px" height="35px" viewBox="0 0 24 24" className='fill-current' xmlns="http://www.w3.org/2000/svg"><path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/></svg>
  </a>
</div>

  </nav> 
  <aside>
    <p>Copyright © 2024 - All right reserved by bookStore Industries Ltd</p>
  </aside>
</footer>
    </div>
    </>
  )
}

export default Footer