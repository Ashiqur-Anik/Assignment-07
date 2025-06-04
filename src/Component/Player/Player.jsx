import React from 'react';
import { IoPersonSharp } from "react-icons/io5";
import { FaFlag } from "react-icons/fa6";

const Player = ({ player, handelSelectPlayers }) => {

    const { img, name, price, battingStyle, country, role } = player
    return (
        <div >
            <div className="card card-compact shadow-xl border-2 border-gray-200 text-black">
                <div className="card-body">
                    <img className='h-64 rounded-lg' src={img} alt="" />
                    <div className='flex items-center gap-2 text-xl font-semibold'>
                        <IoPersonSharp />
                        <h2>{name}</h2>
                    </div>
                    <div className='flex items-center justify-between border-b-2 pb-5'>
                        <div className='flex items-center gap-2 text-base text-gray-500'>
                            <FaFlag />
                            <p>{country}</p>
                        </div>
                        <h1 className='bg-gray-200 px-4 py-2 rounded-xl '>{role}</h1>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='font-bold'>Rating</h1>
                        <p className='font-semibold'>{battingStyle}</p>
                        <p className='font-semibold'>Price: {price}$</p>
                        <button onClick={() => handelSelectPlayers(player)} className='btn mx-auto w-full bg-[#e5ff00] border-none text-black hover:bg-[#fff200]'>Choose Player</button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Player;