import React from 'react'

export default function Button({title, onClick}) {
    return (
        <button onClick={onClick}>
            {title}
        </button>
    )
}
