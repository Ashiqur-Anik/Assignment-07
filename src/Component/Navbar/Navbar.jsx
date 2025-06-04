import { SiBitcoinsv } from "react-icons/si";
import logo from '../../assets/logo.png'

const Navbar = ({ freeCoin }) => {
    return (
        <div>
            <div className="navbar mb-3 px-5 lg:px-0">
                <div className="navbar-start justify-between w-full flex-1 ">
                    <img src={logo} alt="" />
                    <p className="flex items-center text-sm md:text-base md:px-5 py-2 px-3 bg-transparent text-black border-2 border-gray-300 gap-1 shadow-md rounded-lg lg:hidden font-semibold">
                        <span>{freeCoin}</span>
                        <span>Coin</span>
                        <SiBitcoinsv className="text-orange-400 text-lg" />
                    </p>
                    <div className="dropdown relative">
                        <div tabIndex={0} role="button" className=" lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gray-400 rounded-box z-1 mt-3 w-40 p-2 shadow absolute right-1 top-14 text-gray-600">
                            <li className="mx-auto"><a className="text-base">Home</a></li>
                            <li className="mx-auto"><a className="text-base">Fixture</a></li>
                            <li className="mx-auto"><a className="text-base">Teams</a></li>
                            <li className="mx-auto"><a className="text-base">Schedules</a></li>

                        </ul>
                    </div>

                </div>

                <div className="navbar-center hidden lg:flex gap-5">
                    <ul className="menu menu-horizontal px-1 text-gray-500">
                        <li><a className="text-base font-semibold">Home</a></li>
                        <li><a className="text-base font-semibold">Fixture</a></li>
                        <li><a className="text-base font-semibold">Teams</a></li>
                        <li><a className="text-base font-semibold">Schedules</a></li>
                    </ul>
                    <p className="flex items-center px-5 py-2  bg-transparent text-black border-2 gap-1 border-gray-300 shadow-md rounded-lg text-base font-semibold">
                        <span >{freeCoin}</span>
                        <span >Coin</span>
                        <SiBitcoinsv className="text-orange-400 text-lg" />
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Navbar;