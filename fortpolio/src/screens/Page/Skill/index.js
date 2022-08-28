import React from 'react'
import classNames from 'classnames/bind'
import styles from './Skill.module.scss'
import Title from '../../../component/Title'
import { skills } from '../../../data/data'

const cx = classNames.bind(styles)

function Skill() {
  return (
    <div className={cx('skill')}>
      <Title label={"Skills"} title={"Top Skill"} />
      <div className={cx('wrapper')}>
        <div className={cx('my-skill')}>
          {
            skills.map((skill,index) => 
              <div key={index} className={cx('skill-item')}>
                <div className={cx('skill-image')}>
                  <img className={cx('skill-image-link')} src={skill.image} alt={skill.name} />
                </div>
                <span className={cx('skill-name')}>{skill.name}</span>
              </div>
            )
          }
        </div>
        <div className={cx('experience')}>
          <h3 className={cx('experience-title')}>Work experience</h3>
          <div className={cx('experience-wrapper')}>
            <div className={cx('experience-item')}>
              <div className={cx('experience-Work')}>
                <div className={cx('work-name')}>Internship</div>
                <span className={cx('work-time')}>12/2021 - 3/2022</span>
              </div>
              <div className={cx('experience-company')}>
                <h3 className={cx('company-name')}>Company Name</h3>
                <div className={cx('company-content')}>
                  <span>- Hỗ trợ viết bài quảng cáo sản phẩm qua kênh facebook, các forum,...</span>
                  <span>- Giới thiệu, tư vấn sản phẩm, giải đáp các vấn đề thắc mắc của khách hàng qua điện thoại và email.</span>
                </div>
              </div>
            </div>

            <div className={cx('experience-item')}>
              <div className={cx('experience-Work')}>
                <div className={cx('work-name')}>Internship</div>
                <span className={cx('work-time')}>12/2021 - 3/2022</span>
              </div>
              <div className={cx('experience-company')}>
                <h3 className={cx('company-name')}>Company Name</h3>
                <div className={cx('company-content')}>
                  <span>- Hỗ trợ viết bài quảng cáo sản phẩm qua kênh facebook, các forum,...</span>
                  <span>- Giới thiệu, tư vấn sản phẩm, giải đáp các vấn đề thắc mắc của khách hàng qua điện thoại và email.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill