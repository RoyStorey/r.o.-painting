import { useState } from 'react'
import './css/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faBars, faPaintRoller, faUser, faStopwatch, faStop } from '@fortawesome/free-solid-svg-icons'
import Logo from './assets/ropainting.svg'

function App() {
  return (
    <>
      <div className='page-container'>
        <div className='header'>
          <div className='logo'>
            <img src={Logo} />
          </div>
          <div className='left-side-header'>
            <button>get a free quote</button>
            <FontAwesomeIcon icon={faPhone} />
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        <div className='hero'>
          <div className='hero-blur'>
            <h1>Cleaning, Painting, and Wallcovering</h1>
            <button>get your quote today</button>
          </div>
        </div>
        <div className='body'>
          <h2>Better than the competitors</h2>
          <div className='offer-block'>
            <div className='offer-component'>
              <p className='offer-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quia quas repellat! Aperiam, veniam?
              </p>
              <div className='offer-footer'>
                <div className='bad-practice-one'></div>
                <p className='offer-link'>Services</p>
                <div className='emoji-icon'>
                  <FontAwesomeIcon className='icon' icon={faPaintRoller} />
                </div>
              </div>
            </div>
            <div className='offer-component'>
              <p className='offer-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quia quas repellat! Aperiam, veniam?
              </p>
              <div className='offer-footer'>
                <div className='bad-practice-one'></div>
                <p className='offer-link'>Reviews</p>
                <div className='emoji-icon'>
                  <FontAwesomeIcon className='icon' icon={faUser} />
                </div>
              </div>
            </div>
            <div className='offer-component'>
              <p className='offer-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quia quas repellat! Aperiam, veniam?
              </p>
              <div className='offer-footer'>
                <div className='bad-practice-one'></div>
                <p className='offer-link'>Contact Us</p>
                <div className='emoji-icon'>
                  <FontAwesomeIcon className='icon' icon={faStopwatch} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
