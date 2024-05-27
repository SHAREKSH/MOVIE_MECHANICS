import React, { useEffect } from 'react'
import { useContext } from 'react';
import Contextpage from '../Contextpage';

function Reco() {
    const { reco,page,setPage} = useContext(Contextpage);
    
    // useEffect(() => {
    //     setPage(1) // Reset Page to 1 on initial render.
    // }, []);

    useEffect(() => {
        // if (page > 0) {
        //     reco();
        // }
        reco()
    }, [])
    
  return (
    <div className='w-screen h-screen  bg-black flex items-center justify-center'>
        <h1 className='font-extrabold text-white text-8xl'>COMING SOON......</h1>
    </div>
  )
}

export default Reco