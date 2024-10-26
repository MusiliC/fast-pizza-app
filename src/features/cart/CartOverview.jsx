import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-800 text-stone-200 sm:p-6 uppercase p-4 text-sm md:text-base flex items-center justify-between">
      <p className="text-stone-300 font-semibold  sm:space-x-6 space-x-4 ">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="#">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
