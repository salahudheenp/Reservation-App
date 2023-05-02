import React, { useState } from 'react'
import './option.css'


const Options = ({ options, setOption }) => {



    const handleOption = (name, operation) => {
        setOption((prev) => {
            return {
                ...prev,
                [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
            }
        })
    }
    return (
        <div className="optionCounter">
            <button disabled={options.adult <= 1} className='optionCounterButton' onClick={() => handleOption('adult', 'd')}>-</button>
            <span className="optionCounterNumber">{options.adult}</span>
            <button className='optionCounterButton' onClick={() => handleOption('adult', 'i')}>+</button>
        </div>
    )
}

export default Options