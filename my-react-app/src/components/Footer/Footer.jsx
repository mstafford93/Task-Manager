import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <footer>
      <p>By M.Stafford {new Date().getFullYear()} My Task Manager.</p>
      <p>
      <a href="https://github.com/mstafford93">GitHub <i class="fa fa-github"></i></a>
      <a href="www.linkedin.com/in/matthew-stafford-7a44522b4">LinkedIn <i class="fa fa-linkedin"></i></a>
      <a href="https://medium.com/@mgstafford">Medium <i class="fa fa-medium"></i></a>
      </p>
    </footer>
  )
}

export default Footer;
