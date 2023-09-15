import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/my1.png'
import HeaderSocials from './HeaderSocials'
import { Typewriter } from 'react-simple-typewriter'

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        {/* <h1>Moh Faizan</h1> */}

        <h1 style={{ fontWeight: 'normal' }}>
          {/* Life is simple{' '} */}
          <span style={{   }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={['Moh Faizan']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>

        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
