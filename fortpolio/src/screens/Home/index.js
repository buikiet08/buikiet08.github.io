import React from 'react'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import { Routes,Route,NavLink } from 'react-router-dom'
import { FaHome,FaUser,FaBriefcase,FaGraduationCap,FaEnvelope } from "react-icons/fa";

import HomePage from '../Page/HomePage'
import Skill from '../Page/Skill'
import Portfolio from '../Page/Portfolio'
import About from '../Page/About'
import Contact from '../Page/Contact';
import Detail from '../Page/Detail';
import Main from '../Page/Main';

const cx = classNames.bind(styles)

function Home() {
  return (
    <div className={cx('container')}>
      <div className={cx('main-left')}>
        <nav className={cx('nav')}>
          <img className={cx('nav-title')} src={'http://tokyo.ibthemespro.com/assets/img/logo/dark.png'} alt={'http://tokyo.ibthemespro.com/assets/img/logo/dark.png'} />
          <ul>
            <li>
              <NavLink className={({ isActive }) => cx(isActive ? 'active' : 'nav-link')}  to='/'>
                <FaHome className={cx('icon')} />           
                Home
              </NavLink>             
            </li>
            <li>
              <NavLink className={({ isActive }) => cx(isActive ? 'active' : 'nav-link')} to='/about'>
                <FaUser className={cx('icon')} />
                About
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => cx(isActive ? 'active' : 'nav-link')} to='/skill'>
                <FaGraduationCap className={cx('icon')} />
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => cx(isActive ? 'active' : 'nav-link')} to='/portfolio'>
                <FaBriefcase className={cx('icon')} />
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => cx(isActive ? 'active' : 'nav-link')} to='/contact'>
                <FaEnvelope className={cx('icon')} />
                Contact
              </NavLink>
            </li>
          </ul>
          <div className={cx('copyright')}><p>© 2022 Tokyo <br /> Created by<a href="https://www.facebook.com/kiet.tan.754365/" target="_blank" rel="noreferrer"> BuiKiet</a></p></div>
        </nav>
      </div>
      <div className={cx('main-right')}>
        <div className={cx('section')}>
          <div className={cx('main-container')}>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/about" element={<Main />} />
              <Route path="/skill" element={<Skill />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio/:title" element={<Detail />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home