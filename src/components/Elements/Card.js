import { Link } from "react-router-dom"
import Rating from "./Rating"
import { useCart } from "../../context"
import { useEffect, useState } from "react";

export const Card = ({ prod }) => {
    const { addToCart, cartList, removeFromCart } = useCart();
    const [inCart, setInCart] = useState(false);

    useEffect(() => {
        setInCart(cartList.find(item => item.id === prod.id));
    }, [cartList, prod.id]);

    function handleClick(prod) {
        if(inCart) {
            removeFromCart(prod);
        } else {
            addToCart(prod);
        }
    }

  return (
    <div>
      <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/products/${prod.id}`} className="relative" >
            { prod.best_seller && <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span> }
            <img className="rounded-t-lg w-full h-64" src={prod.poster} alt={prod.name} />
        </Link>
        <div className="p-5">
            <Link to={`/products/${prod.id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{prod.name}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{prod.overview}</p>
            
            <div className="flex items-center my-2">

                <Rating rating={prod.rating} />
                
            </div>

            <p className="flex justify-between items-center">
                <span className="text-2xl dark:text-gray-200">
                    <span>$</span><span>{prod.price}</span>
                </span>

                { inCart ? <button onClick={() => handleClick(prod)} className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ${ prod.in_stock ? '': 'cursor-not-allowed' }`} disabled={ prod.in_stock ? "" : "disabled" }>Remove Item <i className="ml-1 bi bi-trash3"></i></button> 
                : 
                <button onClick={() => handleClick(prod)} className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${ prod.in_stock ? '': 'cursor-not-allowed' }`} disabled={ prod.in_stock ? "" : "disabled" }>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button> }
            </p>
        </div>
    </div>
    </div>
  )
}