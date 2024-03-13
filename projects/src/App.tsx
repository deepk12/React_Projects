import { useState } from 'react'
import './App.css'

import CurrencySelector from './Currency'
// import LanguageSelector from './Language'

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(0)

  return (
    <>
     
     <CurrencySelector/>
     {/* <LanguageSelector/> */}
     
    </>
  )
}

export default App
