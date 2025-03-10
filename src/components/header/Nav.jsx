import { Link } from "react-router";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import useProductStore from "../productStore";
import "./header.css";

const NavLinks = () => {

    const cart = useProductStore(state => state.shoppingCart);

    return (
        <>
            <Link to="/" >Home</Link>
            <Link to="/about">Contact</Link>
            <Link to="/Cart">
                <div className="flex items-center">
                    <span>{cart.length}</span>
                    <ShoppingCart />
                </div>
            </Link>

        </>
    )
};

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (

        <>
            <nav className="flex w-1/3 justify-end">
                <div className="hidden justify-between w-full md:flex">
                    <NavLinks />
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="flex basis-full flex-col gap-2 items-center md:hidden ">
                    <NavLinks />
                </div>
            )}

        </>
    )
}

export default Nav;