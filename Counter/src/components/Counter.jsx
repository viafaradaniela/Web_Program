import React from "react"

export function Counter({title, color}){
   
    const buttonStyle = {
        padding: '0.50rem',
        color: 'pink',
        justifyContent: 'space-between',
        textDecoration: 'none',
        height: '7vh',
    }
    return (
        <>
        <header><h1>0</h1></header>
        <div>
        <button style={buttonStyle}>+</button>
        <button style={buttonStyle}>-</button>
        <button style={buttonStyle}>CE</button>
        </div>
        </>   
    )
}