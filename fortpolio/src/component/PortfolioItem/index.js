import React from 'react'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './PortfolioItem.module.scss'

const cx = classNames.bind(styles)

function PortfolioItem(props) {
  return (
    <Link to={`/portfolio/${props.title}`} className={cx('portfolio-item')}>
        <img src={props.image} alt={props.title} />
        <div className={cx('portfolio-content')}>
            <h5>{props.title}</h5>
            <span>{props.name}</span>
        </div>
    </Link>
  )
}

export default PortfolioItem