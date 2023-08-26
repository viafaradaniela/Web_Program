import React from "react"
import './Counter.css'


export default function Counter ({ onClick, label }) {
    
    return (
        
      <>
      
        <button type='button' className='button-style' onClick={onClick}>{label}</button>

      </>
    )
    
}
