import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const Players = ({ handelSelectPlayers }) => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('players.json')
            .then(data => data.json())
            .then(res => setPlayers(res))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5'>
            {
                players.map(player => <Player
                    key={player.id}
                    player={player}
                    handelSelectPlayers={handelSelectPlayers}
                ></Player>)
            }
        </div>
    );
};

export default Players;