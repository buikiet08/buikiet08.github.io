import React from 'react'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)
function Button(props) {
  return (
    <div className={cx('description-button')}>
        <button type={props.type} className={cx('ib-button')}>{props.label}</button>
    </div>
  )
}

export default Button