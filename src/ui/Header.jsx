/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'
import Username from '../features/user/Username'

const Header = () => {
  return (
    <header className='bg-yellow-500 uppercase px-4 py-3 border-b border-stone-300 sm:px-6 flex items-center justify-between'>
      <Link to="/" className='tracking-[5px] font-pizza'>Fast React Pizza Co.</Link>

      <SearchOrder />

      <Username />

    </header>
  )
}

export default Header