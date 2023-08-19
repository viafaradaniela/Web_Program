import React from "react"

export function Footer({title, color}){
    const componentStyle = {
        backgroundColor: color,
        color: 'pink',
        display: 'flex',
        justifyContent: 'space-between',
        padding: "2rem 2em",
     }
    return (
        <>
        <footer style={componentStyle}>
        <h3>Daniela Viafara - A00372426</h3>
        </footer>
        </>   
    )
}