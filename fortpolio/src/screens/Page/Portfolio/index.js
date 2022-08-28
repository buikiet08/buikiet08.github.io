import React from 'react'
import classNames from 'classnames/bind'
import styles from './Portfolio.module.scss'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { FaArrowLeft } from "react-icons/fa";

import Title from '../../../component/Title'
import { projects } from '../../../data/data'
import PortfolioItem from '../../../component/PortfolioItem';
const cx = classNames.bind(styles)

function Portfolio() {
  // useEffects(() => {
  //   Aos.init({ duration: 2000 });
  // }, [])
    Aos.init({ duration: 2000 });

  return (
    <div className={cx('portfolio')}>
      <Title label={"Portfolio"} title={"Creative Portfolio"} />
      <div className={cx('wrapper')}>
        <ul className={cx('portfolio_list')}>
          {
            projects.map((project,index) =>
            <li 
            key={index} 
            data-aos="fade-right" 
            data-aos-duration="1200" 
            className={cx('aos-init aos-animate portfolio_item')}>
              <PortfolioItem image={project.image} title={project.title} name={project.name} />
            </li>
            )
          }
        </ul>
      </div>
    </div>

  )
}

export default Portfolio