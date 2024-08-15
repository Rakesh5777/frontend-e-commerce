import { useState } from 'react'
import './App.css'
import Header from './Components/Header/header'
import Filter from './Components/Filter/filter' 
import Cardcontainer from './Components/Card container/cardcontainer'

function App() {

  return (
    <>
    <div className="row">
      <div className="col-12">
        <Header />
      </div>
    </div>
    <div className="row">
      <div className="col-2">
        <Filter />
      </div>
      <div className="col-10">
        <Cardcontainer />
      </div>
    </div>
      </>
  )
}

export default App
