import React from "react"

export function Header({title, color}){
    const componentStyle = {
       backgroundColor: color,
       color: 'pink',
       display: 'flex',
       padding: '0.50rem',
       justifyContent: 'space-between',
       alignItems: 'left',
       height: '21vh',

    }
  
    return (
    <>       
    <header style={componentStyle}>
           <h1>DigiCounter</h1>
    </header>
    </>   
       )
   }