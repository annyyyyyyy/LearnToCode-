import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Search } from "../Sections/Search";
import { DropdownLoggedIn, DropdownLoggedOut } from '../index';
import { useCart } from "../../context";

export const Header = () => {
    const { cartList } = useCart();
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);
    const [show, setShow] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const token = JSON.parse(sessionStorage.getItem("token"));

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
        if(darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

  return (
    <header>      
        <nav className="bg-white dark:bg-gray-950">
            <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl px-6 md:px-6 py-4">
                <Link to="/" className="flex items-center gap-2">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="LearnToCode Logo" />
                    <span className="self-center text-2xl text-gray-600 font-semibold whitespace-nowrap dark:text-white">LearnToCode</span>
                </Link>
                <div className="flex items-center relative">
                    <button onClick={() => setDarkMode(!darkMode)}>
                    { !darkMode ? <span className="cursor-pointer text-2xl text-gray-700 dark:text-white mr-5 bi bi-toggle-off"></span> : <span className="cursor-pointer text-2xl text-gray-700 dark:text-white mr-5 bi bi-toggle-on"></span> }
                    </button>
                    
                    <span onClick={() => setShow(!show)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
                    <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                    <span className="text-2xl bi bi-cart-fill relative">
                        <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{ cartList.length }</span>
                    </span>                    
                    </Link>
                    <span onClick={() => setDropdown(!dropdown)} className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
                    { dropdown && (token ? <DropdownLoggedIn setDropdown={setDropdown} /> : <DropdownLoggedOut setDropdown={setDropdown} />) }
                </div>
            </div>
        </nav>

        { show && <Search setShow={setShow} /> }

    </header>
  )
}