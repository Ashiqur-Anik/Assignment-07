import backgroundImage from "../../assets/bg-shadow.png"
import Image from "../../assets/banner-main.png"
import { useState } from "react";


const Hero = ({ setPage, selectPlayer, clame }) => {

    const [activeBtn, setActiveBtn] = useState('available');

    const availableBtn = () => {
        setActiveBtn('available')
    }
    const selectBtn = () => {
        setActiveBtn('select')
    }

    return (
        <div className="m-[1px]">
            <div
                className="hero lg:h-[500px] h-screen"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    borderRadius: " 20px",
                }}>
                <div className="hero-overlay bg-transparent "></div>
                <div className="hero-content text-neutral-content text-center flex-col">
                    <img src={Image} alt="" />
                    <h1 className="text-3xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="text-lg text-gray-400">Beyond Boundaries Beyond Limits</p>
                    <button onClick={() => clame(3000)} className="btn rounded-full text-black bg-[#e5ff00] shadow-[0_0_5px_2px_#e5ff00] border-none hover:shadow-[0_0_12px_4px_#e5ff00] transition-all duration-300">Claim Free Credit</button>
                </div>
            </div>

            <div className="text-black md:flex mx-5 lg:mx-0 md:justify-between text-center space-y-2 my-10">
                <h1 className="text-3xl font-semibold">
                    {activeBtn === 'available' ?
                        'Available Players' :
                        `Selected Player (${selectPlayer.length}/6)`}
                </h1>
                <div>
                    <button onClick={() => { setPage('players'); availableBtn() }} className={`${activeBtn === 'available' ? "bg-[#e5ff00]" : "bg-white"} btn text-black rounded-l-md rounded-r-none border-r-0 border-2 border-gray-300 px-6 shadow-none`}>Available</button>
                    <button onClick={() => { setPage('select'); selectBtn() }} className={`${activeBtn === 'select' ? "bg-[#e5ff00]" : "bg-white"} btn text-black rounded-l-none rounded-r-md border-l-0  border-2 border-gray-300 px-6 shadow-none`}>Selected({selectPlayer.length})</button>

                </div>
            </div>
        </div>
    );
};

export default Hero;