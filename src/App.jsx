import React from 'react'
import Navbar from './Component/Layout/Navbar';
import {useState} from 'react'

const App = () => {
  const [activeTab , setActiveTab] = useState('home');

  return (
    <div> 
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main>
        { activeTab === "home"      && <div> render home content </div> }
        { activeTab === "shop"      && <div> render shop content </div> }
        { activeTab === "myOrders"  && <div> render my orders content </div> }
        { activeTab === "Whishlist" && <div> ernder Whishlist content </div> }
      </main>
    </div>

  )
}

export default App