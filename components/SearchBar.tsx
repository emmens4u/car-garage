"use client"

import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('')
    const handleSearch = () => {

    }
    return (

        <form
            className='searchbar'
            onSubmit={handleSearch}
        >
            <div>
                <SearchManufacturer
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
                
                />
            </div>

        </form>
    )
}

export default SearchBar

function ueState(arg0: string): [any, any] {
    throw new Error('Function not implemented.')
}
