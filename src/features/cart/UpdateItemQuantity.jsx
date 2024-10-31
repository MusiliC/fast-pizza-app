/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Button from '../../ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseItemQuantity,  increaseItemQuantity } from './cartSlice';

const UpdateItemQuantity = ({pizzaId, currentQuantity}) => {

  const dispatch = useDispatch();

 

  return (
    <div className='flex gap-3 items-center md:gap-3'>
      <Button type="round" onClick={() => dispatch(decreaseItemQuantity(pizzaId))} >-</Button>
      <span className='text-sm font-semibold' >{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseItemQuantity(pizzaId))}  >+</Button>
    </div>
  )
}

export default UpdateItemQuantity