import React from 'react'
import styles from './Input.module.css'

const Input = ({label, type, name, value, onChange, error, onBlur}) => {
  return (
    <div className={styles.wrapper}>
      {/* <label htmlFor={name} styles={styles.label}  >{label}</label> */}
      <input
        id = {name}
        name = {name}
        className = {styles.input}
        type = {type}
        placeholder = {label}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}
export default Input