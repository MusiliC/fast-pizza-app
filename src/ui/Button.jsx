/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children, disabled, to, type, onClick}) => {

  const base =  "text-sm bg-yellow-400 uppercase tracking-wide rounded-full font-semibold text-stone-800  inline-block hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring  focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"

const styles = {
  primary : base + " px-4 py-3 md:px-6 md:py-4",
  small : base + " px-2 py-1 md:px-4 md:py-2.5 text-xs", 
  round : base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  secondary: "text-sm bg-transparent border-stone-200 border-2 uppercase tracking-wide rounded-full font-semibold text-stone-400  inline-block hover:bg-stone-600 transition-colors duration-300 focus:outline-none focus:ring focus:bg-stone-300  focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-3 md:px-6 md:py-4 hover:text-stone-800 focus:text-stone-800 text-xs"
}

  if(to){
    return <Link className={styles[type]} to={to}>{children}</Link>
  }

   if(onClick){
    return <Link className={styles[type]}  disabled={disabled} onClick={onClick}>{children}</Link>
  }

  return (
    <button disabled={disabled} className={styles[type]}>{children}</button>
  )
}

export default Button