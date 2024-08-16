import { Link } from "react-router-dom";
const NavBar = () => {

  return (
    <nav
      style={{ backgroundColor: "#CBE3E5" }}
      className="flex justify-between items-center p-4 text-black rounded-bl-3xl rounded-br-3xl">
      <div className="flex items-center space-x-2">
        <Link to="/" className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZqeuJVJ_hru2tVsfwE2nRxznt-pG4dEyavQ&s"
            alt="Your Logo"
            className="h-16"
          />
        </Link>
      </div>

      <span className="text-xl font-bold italic ml-2 text-right">
        SAFARI VENDORS
      </span>

      <ul className="flex space-x-4 items-center">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="hover:underline">
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" className="flex items-center hover:underline">
            <img
              src="https://i.pinimg.com/originals/66/22/ab/6622ab37c6db6ac166dfec760a2f2939.gif" // Replace with your GIF URL
              alt="Cart"
              className="h-10 w-10"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
