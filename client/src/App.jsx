import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import Header from './components/Header'
import List from './components/List'

function App() {
  

  return (
    <>
      <Header />
      <List />
      <div className='footer'>
            <h4 className='nameTag'>Illustration by <a href="https://www.instagram.com/lunar.wart" target='_blank'><FontAwesomeIcon icon={faInstagram} className='igIcon'/>  Lunar.wart</a></h4>
        </div>
    </>
  )
}

export default App
