import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Detail } from './components/Detail';
import Login from './auth/Login';
import Navbar from './components/Navbar'
import Container from './pages/Container'
import Trending from './pages/Trending';
import Upcoming from './pages/Upcoming';
import Favorite from './pages/Favoritepage';
import { MovieProvider } from "./Contextpage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Player from './pages/Player';
import Search from './pages/Search';
import { Helmet } from "react-helmet";
import logo from "./assets/images/logo.png"
import Reco from './pages/Reco';

function App() {
  

  return (
    <MovieProvider>
      <Helmet>
      <link rel="icon" type="image/x-icon" href="/fev.svg"/>
        
       <meta property="og:image" content={logo}/>
       <title>Movie_mechanics</title>
      </Helmet>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />

      <Navbar />
      <div className="md:ml-[15rem]">
        <Routes>
          <Route path='/' element={<Container />} />
          <Route path='/login' element={<Login />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/upcoming' element={<Upcoming />} />
          <Route path='/moviedetail/:id' element={<Detail />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/player/:id/:title" element={<Player />} /> {/*Route-1 For Player, Title is just for beauty of url, it is not used anywhere.*/}
          <Route path="/player/:id" element={<Player />} /> {/*Route-2 For Player. Movie still available even if someone removes Title from end of the url.*/}
          <Route path="/search/:query" element={<Container/>}/>
          <Route path="/search/" element={<Container/>}/>
          <Route path="/Recommendations" element={<Reco/>}/>
        </Routes>
      </div>
    </MovieProvider>
  )
}

export default App