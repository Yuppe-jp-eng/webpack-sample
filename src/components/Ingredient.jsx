import React from 'react'

export default function Ingredient({amount, mesuarement, name }) {
    return (
        <li>
            {amount} {mesuarement}  {name}
        </li>
    )
}