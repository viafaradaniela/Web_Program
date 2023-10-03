import React from "react";
import './catimg.css'

export function CatImg({content}) {
    return (
        <div className="img-container">
            <img src={content} alt="Cat-image" />
        </div>
    )
}