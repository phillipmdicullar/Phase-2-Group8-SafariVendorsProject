import React, { useState, useEffect } from 'react';

const NavBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3000/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []); 

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        
        console.log('Search query:', searchQuery);
    };

    return (
        <nav style={{ backgroundColor: '#CBE3E5' }} className="flex justify-between items-center p-4 text-black rounded-bl-3xl rounded-br-3xl">
            
            <div className="flex items-center space-x-2"> 
                <a href="/" className="flex items-center">
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZqeuJVJ_hru2tVsfwE2nRxznt-pG4dEyavQ&s" 
                        alt="Your Logo" 
                        className="h-16" 
                    />
                    <span className="text-xl font-bold italic ml-2">SAFARI VENDORS</span> 
                </a>
            </div>
            <div className="flex flex-grow justify-center">
                <form className="flex" onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search..."
                        required
                        className="p-2 border border-gray-300 rounded text-base text-black"
                    />
                    <button
                        type="submit"
                        className="p-2 bg-gray-600 text-white rounded ml-2 hover:bg-gray-500"
                    >
                        Search
                    </button>
                </form>
            </div>
            <ul className="flex space-x-4 items-center">
                <li>
                    <a href="/" className="hover:underline">Home</a>
                </li>
                <li>
                    <a href="/products" className="hover:underline">Products</a>
                </li>
                <li>
                    <a href="/cart" className="flex items-center hover:underline">
                        <img 
                            src="https://i.pinimg.com/originals/66/22/ab/6622ab37c6db6ac166dfec760a2f2939.gif" // Replace with your GIF URL
                            alt="Cart"
                            className="h-10 w-10" 
                        />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
