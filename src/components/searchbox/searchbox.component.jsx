import React from 'react'
import './searchbox.styles.css'

export const SearchBox = ({placeholder, changeHandler}) => {
    return  <input className='search'
    type='search' 
    onChange={changeHandler} 
    placeholder={placeholder} />
}