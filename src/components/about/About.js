import React from 'react'
import './about.css'
import ME from '../../assets/my.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


export default function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            {/* <article className='about__card'> */}
              {/* <FiUsers className='about__icon'/> */}
              {/* <h5>Clients</h5> */}
              {/* <small>0</small> */}
            {/* </article> */}
          </div>
          <p>I am currently in my senior year studying computer
              science and engineering at Chandigarh Group of
              Colleges, Landran under PTU, Punjab. I have worked
              with MERN Stack and have created multiple personal
              projects using the same Tech stack. Moreover, I’m also
              familiar with Data Structures and Algorithms. I have
              solved over 400 problems on GFG. I’m looking for
              Internship / Full-Time opportunities as a Software
              Developer.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
