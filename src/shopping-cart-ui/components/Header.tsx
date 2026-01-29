import { FaShoppingCart } from "react-icons/fa";

import { useCart } from "../context/CartContext";

const Header = () => {
    const { cart } = useCart();
    const itemCount = cart.reduce((total, item) => total + (item.quantity || 0), 0);

    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-600">Shopping Cart UI</h1>

                <div className="relative">
                    <FaShoppingCart className="text-2xl text-gray-700"/>
                    {itemCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            {itemCount}
                        </span>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;