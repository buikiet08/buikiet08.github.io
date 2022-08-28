import React from 'react'
import { useParams } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Detail.module.scss'
import { projects } from '../../../data/data'
import Button from '../../../component/Button'

const cx = classNames.bind(styles)

function Detail() {
    const {title} = useParams()
  return (
    <div className={cx('detail')}>
        {
            projects.filter(project => project.title === title).map((item,index) => 
                <div className={cx('wrapper')}>
                    <h3>{item.title}</h3>
                    <div className={cx('detail-image')}>
                        <img src={item.image} alt={item.title} />
                        <img src={item.image} alt={item.title} />
                        <img src={item.image} alt={item.title} />
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className={cx('detail-description')}>
                        <span>-Sed hendrerit. Cras risus ipsum, faucibus ut, ullamcorper id, varius estibulum ante ipsum primis in faucibus .</span>
                    </div>
                    <div className={cx('detail-technology')}>
                        <h4>Technology used</h4>
                        <ul>
                            <li>. NukeViet CMS</li>
                            <li>. HTML 5</li>
                            <li>. CSS 3</li>
                            <li>. Jquery</li>
                            <li>. Bootstrap 3</li>

                        </ul>
                    </div>
                    <Button label="View demo" />
                </div>
            )
        }
    </div>
  )
}

export default Detail