import React from 'react'
import "./Footer.css"
import fb_icon from '../../assets/facebook_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import yt_icon from '../../assets/youtube_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <button className='btn'>Get Started</button>
      <p>Create or restart your membership</p>
      <div className="social-icons">
        <img src={fb_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={yt_icon} alt="" />
      </div>
      <ul className='footer-lists'>
        <li>FAQ</li>
        <li>Account</li>
        <li> Investor Relations</li>
        <li>Ways to Watch</li>
        <li>Privacy</li>
        <li>Corporate Information</li>
        <li>Speed Test</li>
        <li>Only on Netflix</li>
        <li>Help Center</li>
        <li>Media Center</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li> Cookie Preferences</li>
        <li>Contact Us</li>
      </ul>
    </div>
  )
}

export default Footer