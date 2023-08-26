import React, { useState } from 'react'
import Counter from './components/Counter/Counter'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export function App () {
    const buttonContainerStyle = {
      margin: '10px auto'
    }
  
    const [contador, setContador] = useState(0)
  
    const add = () => {
      setContador(contador + 1)
    }
  
    const reset = () => {
      setContador(0)
    }
  
    const subtract = () => {
      setContador(contador > 0 ? contador - 1 : contador)
    }
  
    console.log(contador)
  
    return (
      <>
          <Header value={contador} />
          <Counter onClick={subtract} label='-' />
          <Counter onClick={reset} label='Reset' />
          <Counter onClick={add} label='+' />
        <Footer />
      </>
  
    )
  }
  