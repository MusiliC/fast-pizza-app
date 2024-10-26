/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children, disabled, to}) => {

  const className = 'bg-yellow-400 uppercase tracking-wide rounded-full font-semibold text-stone-800 px-4 py-3 inline-block hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring  focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4';

  if(to){
    return <Link className={className} to={to}>{children}</Link>
  }
  return (
    <button disabled={disabled} className={className}>{children}</button>
  )
}

export default Button