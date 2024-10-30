/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import EmptyCart from './EmptyCart';


function Cart() {

  const dispatch = useDispatch();

  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart)

  const handleOnClick = () => {
    dispatch(clearCart())
  }
 
  if(!cart.length) return <EmptyCart/>

  return (
    <div className='py-3 px-4'>
      <LinkButton to="/menu" >&larr; Back to menu</LinkButton>

      <h2 className='mt-7 text-xl font-semibold'>Your cart, {username}</h2>

      <ul className='divide-y divide-stone-200 border-b mt-3 '>
        {
          cart.map((item, i) => <CartItem item={item} key={i} />)
        }
      </ul>

      <div className='mt-4 space-x-3'>
        <Button type="primary" to="/order/new" className="mt-6 space-x-2">Order pizzas</Button>
        <Button type="secondary" onClick={handleOnClick} >Clear Cart</Button>

      </div>
    </div>
  );
}

export default Cart;
