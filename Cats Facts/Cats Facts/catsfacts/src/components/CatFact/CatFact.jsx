import React from "react";
import './catfact.css'
export function CatFact({text}) {
    return (
        <p className="fact">{text}</p>
    )
}