import React from "react"
import './Header.css'

export default function Header({value}){

return (
<>
 <header>
   <h1>DigiCounter</h1>
 </header>
<div>
   <h2>{value}</h2>
</div>
</>
)
}