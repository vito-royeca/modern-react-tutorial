import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

import { useCart } from "../context/CartContext";

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const { cart, removeFromCart, clearCart } = useCart();
    const itemCount = cart.reduce((total, item) => total + (item.quantity || 0), 0);
    const total = cart.reduce((total, item) => total + ((item.price || 0) * (item.quantity || 0)), 0).toFixed(2);

    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-600">Shopping Cart UI</h1>

                <div className="relative">
                    <button
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="cursor-pointer">
                        <FaShoppingCart className="text-2xl text-gray-700"/>
                        {itemCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {itemCount}
                            </span>
                        )}
                    </button>
                    {showDropdown && (
                        <div className="absolute right-0 mt-2 w-80 bg-white border rounded shadow-lg z-50">
                            <div className="p-4">
                                <h2 className="font-semibold text-lg mb-2">Cart Summary</h2>
                                {cart.length === 0 ? (
                                    <p className="text-gray-500 text-sm">Your cart is empty.</p>
                                ) : (
                                    <>
                                        <ul className="max-h-60 overflow-y-auto divide-y divide-gray-200">
                                            {cart.map(item => (
                                                <li key={item.id} className="flex justify-between items-center py-2">
                                                    <div>
                                                        <span>{item.name} x {item.quantity}</span>
                                                        <span>${((item.price || 0) * (item.quantity || 0)).toFixed(2)}</span>
                                                    </div>
                                                    <button 
                                                        className="text-sm text-red-500 hover:underline" 
                                                        onClick={() => removeFromCart(item.id)}>
                                                            Remove
                                                    </button>

                                                </li>
                                            ))}
                                        </ul>
                                        <div className="border-t pt-2 flex justify-between font-bold">
                                            <span>Total:</span>
                                            <span>${total}</span>
                                        </div>
                                        <button
                                            className="mt-3 w-full bg-red-500 text-white py-1 rounded hover:bg-red-600"
                                            onClick={ clearCart }>
                                                Clear Cart
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;