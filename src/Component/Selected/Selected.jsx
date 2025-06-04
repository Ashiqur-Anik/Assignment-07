import { MdDelete } from "react-icons/md";

const Selected = ({ selectPlayer,DeletePlayer }) => {
    return (
        <div className=" mx-1 md:mx-5 lg:mx-auto">
            {
                selectPlayer.map((player,idx) =>
                    <div className="text-black flex justify-between items-center border-2 border-gray-200 bg-slate-50 md:p-3 p-2 rounded-lg md:mb-5 mb-2" key={idx}>
                        <div className="flex md:gap-4 gap-2 items-center">
                            <img className="md:w-20 md:h-16 w-16 h-12 rounded-lg" src={player.img} alt="" />
                            <div>
                                <h1 className="md:text-lg font-bold">{player.name}</h1>
                                <p className="text-gray-500 text-sm md:text-base">{player.battingStyle}</p>
                            </div>
                        </div>
                        <MdDelete onClick={()=>DeletePlayer(player.id)}  className="    text-2xl cursor-pointer text-red-600"/>
                    </div>
                )

            }
        </div>
    );
};

export default Selected;