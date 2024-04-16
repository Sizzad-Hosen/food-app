import { useState } from "react";
import { AiFillTag, AiOutlineMenu } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { FaShoppingCart, FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { data } from "../../data";
const Navbar = () => {
const [value , setValue] = useState(data);



const handleSubmit =()=>{
   


}

const onHandleChange=(e)=>{
  
    setValue(e.target.value);
}
  return (
    <div className=" w-full lg:w-full mx-auto container">
      <div className="flex justify-between p-4 items-center">

        {/* Menu */}
        <div className="flex items-center">
          <div className="cursor-pointer">
            <details className="dropdown">
              <summary className="m-1 btn"><AiOutlineMenu className="bg-black-200" /></summary>
              <ul className="p-3 px-5 shadow menu dropdown-content z-[1] bg-gray-200 h-screen text-gray-800 w-52">
                <p className="text-2xl font-bold">Best Eats</p>
                <p className="py-4 text-xl flex"><TbTruckDelivery className="text-4xl" />Orders</p>
                <p className="py-4 text-xl flex"><MdFavorite className="text-4xl" />Favorite</p>
                <p className="py-4 text-xl flex"><FaWallet className="text-4xl" />Wallet</p>
                <p className="py-4 text-xl flex"><MdHelp className="text-4xl" />Help</p>
                <p className="py-4 text-xl flex"><FaUserFriends className="text-4xl" />Invite Friends</p>
                <p className="py-4 text-xl flex"><AiFillTag className="text-4xl" />Promotions</p>
                <p className="py-4 text-xl flex"><BsFillSaveFill className="text-4xl" />Best Ones</p>
              </ul>
            </details>
          </div>

          <h1 className="text-2xl gap-2 sm:text-2xl lg:4xl ">Best <span className="font-bold">Eats</span></h1>

          <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] gap-2">
            <p className="bg-black rounded-full text-white p-2">Delivery</p>
            <p className="text-xl p-2">Pickup</p>
          </div>
        </div>

        {/* Search bar */}
        <div className="navbar-center bg-gray-200 rounded-full flex-grow lg:max-w-[500px] mx-auto lg:mx-0 px-4 py-2 flex items-center">
          <button onClick={handleSubmit}  className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <input
            className="lg:px-4 sm:px-0 sm:py-0 py-2 bg-transparent w-full focus:outline-none rounded-full"
            type="search"
            name="search"
            onChange={onHandleChange}
       
            placeholder="Food search"
          />
        </div>

        {/* Cart button */}
        <div>
          <button className="bg-black text-white px-4 py-2 rounded-full flex  ">
            <FaShoppingCart className="mr-2" /> Cart
          </button>
        </div>
      </div>
    
      

    
    </div>
  );
};

export default Navbar;
