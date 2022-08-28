import React from 'react'
import classNames from 'classnames/bind'
import { FaFacebookF,FaInstagram,FaGithub,FaTiktok,FaYoutube } from 'react-icons/fa';
import styles from './HomePage.module.scss'

const cx = classNames.bind(styles)
function HomePage() {
  return (
    <div className={cx('container')}>
      <div className={cx('avatar')}>
        <div className={cx('image')}>
          <img src={'http://tokyo.ibthemespro.com/assets/img/slider/1.jpg'} alt={'http://tokyo.ibthemespro.com/assets/img/slider/1.jpg'} />
        </div>
      </div>

      <div className={cx('details')}>
        <h3 className={cx('name')}>Adriano Smith</h3>
        <p className={cx('job')}>Creative Photographer based in New York and happy to travel all over Europe to capture photos.</p>
        <ul className={cx('social')}>
          <li>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebookF className={cx('icon')} /></a>
          </li>
          <li>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FaInstagram className={cx('icon')} /></a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaGithub className={cx('icon')} /></a>
          </li>
          <li>
            <a href="https://dribbble.com/" target="_blank" rel="noreferrer"><FaTiktok className={cx('icon')} /></a>
          </li>
          <li>
            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer"><FaYoutube className={cx('icon')} /></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HomePage