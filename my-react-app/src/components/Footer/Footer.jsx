import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <footer>
      <p>By M.Stafford {new Date().getFullYear()} My Task Manager.</p>
      <p>
      <a href="https://github.com/mstafford93"><span>GitHub</span> <i class="fa fa-github"></i></a>
      <a href="www.linkedin.com/in/matthew-stafford-7a44522b4"><span>LinkedIn</span> <i class="fa fa-linkedin"></i></a>
      <a href="https://medium.com/@mgstafford"><span>Medium</span> <i class="fa fa-medium"></i></a>
      </p>
    </footer>
  )
}

export default Footer;
