import React from 'react'
import { Footer } from './components/Footer/Footer'
import { HeaderMobile } from './components/HeaderMobile/HeaderMobile'
import { HeaderWeb } from './components/HeaderWeb/HeaderWeb'
import { Home } from './pages/Home/Home'

function App(): JSX.Element {
  return (
    <div>
      <HeaderWeb />
      <HeaderMobile />
      <Home />
      <Footer />
    </div>
  )
}

export default App
