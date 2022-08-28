import React from 'react'
import classNames from 'classnames/bind'
import styles from './Title.module.scss'

const cx = classNames.bind(styles)
function Title(props) {
  return (
    <div className={cx('title')}>
        <span>{props.label}</span>
        <h3>{props.title}</h3>
    </div>
  )
}

export default Title