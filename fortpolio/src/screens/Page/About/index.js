import React from 'react'
import classNames from 'classnames/bind'
import styles from './About.module.scss'
import {NavLink} from 'react-router-dom'

import Button from '../../../component/Button'

const cx = classNames.bind(styles)
function About() {
  return (
    <div className={cx('about')}>
      <div className={cx('about_image')}>
        <img src="http://tokyo.ibthemespro.com/assets/img/slider/1.jpg" alt="about" />
      </div>
      <div className={cx('description')}>
        <h3 className={cx('name')}>Adriano Smith &amp; Photographer</h3>
        <div className={cx('description_inner')}>
          <div className={cx('left')}>
            <p>Hello, I am a creative photographer based in New York and happy to travel all over Europe to capture your big day in candid and authentic photos. I will create a lasting memory of the people.</p>
            <NavLink to='/about/about'>
              <Button label="Read More" />
            </NavLink>
          </div>
          <div className={cx('right')}>
            <ul>
              <li>
                <p><span>Birthday:</span>16.08.2001</p>
              </li>
              <li>
                <p><span>Age:</span>21</p>
              </li>
              <li>
                <p><span>Address:</span>Ave 11, New York, USA</p>
              </li>
              <li>
                <p><span>Email:</span><a href="mailto:mail@gmail.com">buikiet16801@gmail.com</a></p>
              </li>
              <li>
                <p><span>Phone:</span><a href="tel:+770221770505">+84 866 760 042</a></p>
              </li>
              <li>
                <p><span>Study:</span>Univercity of Texas</p>
              </li>
              <li>
                <p><span>Freelance:</span>Available</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About