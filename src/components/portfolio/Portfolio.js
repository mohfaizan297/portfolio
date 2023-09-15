import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.png'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'
import IMG5 from '../../assets/img5.png'
import IMG6 from '../../assets/img6.png'

export default function Portfolio() {

  const data = [
    {
      id: 1,
      image: IMG6,
      title: 'My Portfolio',
      github: 'https://github.com',
      demo: 'https://github.com/mohfaizan297'
    },
    {
      id: 2,
      image: IMG2,
      title: 'Notes App',
      github: 'https://github.com',
      demo: 'https://mohfaizan297.github.io/NotesApp/'
    },
    {
      id: 3,
      image: IMG1,
      title: 'COVID-19 Tracker',
      github: 'https://github.com',
      demo: 'https://mohfaizan297.github.io/COVID-19-Tracker/'
    },
    {
      id: 4,
      image: IMG3,
      title: 'Piano App',
      github: 'https://github.com',
      demo: 'https://mohfaizan297.github.io/Piano-App/'
    },
    {
      id: 5,
      image: IMG4,
      title: 'Tic Tac Toe',
      github: 'https://github.com',
      demo: 'https://mohfaizan297.github.io/Tic-Tac-Toe/'
    },
    {
      id: 6,
      image: IMG5,
      title: 'Social Media Website',
      github: 'https://github.com',
      demo: 'https://github.com/mohfaizan297'
    },
    
  ]


  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (<article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>)
          })
        }
             
               
      </div>
    </section>
  )
}
