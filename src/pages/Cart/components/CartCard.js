import { Link } from "react-router-dom"
import { useCart } from "../../../context";

export const CartCard = ({ item }) => {
  const { removeFromCart } = useCart();

    return (
      <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
        <div className="flex">
            <Link to={`products/${item.id}`}>
              <img className="w-32 rounded" src={item.poster} alt={item.name} />
            </Link>
            <div className="">
              <Link to={`products/${item.id}`}>
                <p className="text-lg ml-2 dark:text-slate-200">{item.name}</p>
              </Link>            
              <button onClick={() => removeFromCart(item)} className="text-base ml-2 text-red-400">Remove</button>
            </div>
        </div>
        <div className="text-lg m-2 dark:text-slate-200">
          <span>${item.price}</span>
        </div>
      </div>
    )
  }