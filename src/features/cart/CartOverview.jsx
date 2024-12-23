/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {

   const totalCartQuantity = useSelector(getTotalCartQuantity);
   const totalCartCartPrice = useSelector(getTotalCartPrice);

   if(!totalCartQuantity) return null;

  return (
    <div className="bg-stone-800 text-stone-200 sm:p-6 uppercase p-4 text-sm md:text-base flex items-center justify-between">
      <p className="text-stone-300 font-semibold  sm:space-x-6 space-x-4 ">
        <span>{totalCartQuantity}</span>
        <span>{formatCurrency(totalCartCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
