import React, { useState } from 'react'
import Counter from './components/Counter/Counter'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export function App () {
  
    const [counter, setCounter] = useState(0)
  
    const add = () => {
      setCounter(counter + 1)
    }
  
    const reset = () => {
      setCounter(0)
    }
  
    const subtract = () => {
      setCounter(counter > 0 ? counter - 1 : counter)
    }
  
    return (
      <>
          <Header value={counter}/>
          <Counter onClick={add} label='+'/>
          <Counter onClick={subtract} label='-'/>
          <Counter onClick={reset} label='Reset'/>
          <Footer />
      </>
  
    )
  }
  