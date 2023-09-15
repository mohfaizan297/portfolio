import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

export default function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX - Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon icon-left'/>
              <p className='para-right'>I specialize in crafting mobile-first, responsive web designs that seamlessly adapt to various screen sizes and devices.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon icon-left'/>
              <p className='para-right'>Creating fluid layouts that intelligently adjust content and design elements, optimizing readability and usability on smartphones, tablets, and desktops.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon icon-left'/>
              <p className='para-right'>Implementing CSS media queries to deliver tailored styles and layouts.</p>
            </li>
            
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Full-Stack Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon icon-left'/>
              <p className='para-right'>Proficient in both front-end and back-end technologies, delivering end-to-end web solutions.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon icon-left'/>
              <p className='para-right'>Creating dynamic and interactive web applications using modern frameworks like React.js and Express.js.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon icon-left'/>
              <p className='para-right'>Designing and optimizing databases, ensuring efficient data storage and retrieval with MySQL and MongoDB.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon icon-left'/>
              <p className='para-right'>Building robust APIs to connect front-end and back-end systems, enhancing application functionality and performance.</p>
            </li>           
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Problem Solving</h3>
          </div>
          <ul className="service__list">
          <li>
              <BiCheck className='service__list-icon icon-left'/>
              <p className='para-right'>Applying algorithmic thinking to break down complex problems into manageable components, enabling systematic problem-solving.
                </p>
          </li>
          <li>
              <BiCheck className='service__list-icon icon-left'/>
              <p className='para-right'>I thrive on tackling complex challenges in web development with innovative and creative solutions.</p>
          </li>
          <li>
              <BiCheck className='service__list-icon icon-left'/>
              <p className='para-right'>Adapting to rapidly evolving project requirements and emerging technologies</p>
          </li>
          {/* <li>
              <BiCheck className='service__list-icon icon-left'/>
              <p className='para-right'>Prioritizing user needs and feedback in problem-solving, resulting in solutions that enhance user satisfaction and engagement.</p>
          </li>            
          <li>
              <BiCheck className='service__list-icon icon-left'/>
              <p className='para-right'>Embracing innovative coding practices and design patterns to address unique project requirements effectively.</p>
          </li>             */}
          </ul>
        </article>
      </div>
    </section>
  )
}
