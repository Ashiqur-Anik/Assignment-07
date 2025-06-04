import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react"
import Hero from "./Component/Hero/Hero"
import Navbar from "./Component/Navbar/Navbar"
import Players from "./Component/Players/Players"
import Selected from "./Component/Selected/Selected"
import Footer from './Component/Footer/Footer';

function App() {

  const [page, setPage] = useState('players');
  const [selectPlayer, setSelectPlayer] = useState([]);
  const [freeCoin, setFreeCoin] = useState(0);



  const handelSelectPlayers = (player) => {
    const newPlayer = [...selectPlayer, player]

    if (player.price <= freeCoin) {
      if (selectPlayer.length < 6) {
        const newCoin = freeCoin - player.price;
        setFreeCoin(newCoin);
        const isExit = (selectPlayer.find(item => item.id == player.id))
        if (!isExit) {
          setSelectPlayer(newPlayer)
          toast.success('🦄 Wow Player added your team!', {
            position: "top-center",
          });
          return
        }
        else {
          toast.error('🦄 opps already player added team', {
            position: "top-center",
          });
        }
      }
      else {
        toast.error('🦄 opps already 6 player added', {
          position: "top-center",
        });
      }
    }
    else {
      toast.error('🦄 Coin is not available', {
        position: "top-center",
      });
    }
  }

  const renderPage = () => {
    if (page === 'players') return <Players
      handelSelectPlayers={handelSelectPlayers}
    ></Players>
    if (page === 'select') return <Selected
      selectPlayer={selectPlayer}
      DeletePlayer={DeletePlayer}
    ></Selected>
  }

  const clame = (coin) => {
    const clame = coin + freeCoin;
    setFreeCoin(clame)
    toast.success('🦄 Successfully added free coin', {
      position: "top-center",
    });
  }

  const DeletePlayer = (id) => {
    const deletePlayer = selectPlayer.filter(item => item.id != id);
    setSelectPlayer(deletePlayer);
    toast.success('🦄 Successfully player delete', {
      position: "top-center",
    });
  }

  return (
    <>
      <ToastContainer />
      <div className="lg:w-10/12 mx-auto p-2" >
        <Navbar freeCoin={freeCoin}></Navbar>
        <Hero
          setPage={setPage}
          page={page}
          selectPlayer={selectPlayer}
          clame={clame}
        ></Hero>
        {renderPage()}
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
