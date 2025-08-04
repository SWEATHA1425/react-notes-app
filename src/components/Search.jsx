import React from "react";
import {MdSearch} from "react-icons/md"

function Search({HandleTextSearch}){
    return(
        <div className="flex items-center bg-gray-100 rounded px-4 py-2 mx-4 mb-4 shadow">
            <MdSearch className="text-gray-500 text-xl mr-2"/>
            <input 
                onChange={(event) => HandleTextSearch(event.target.value)}
                type="text"
                placeholder="Search"
                className="w-full bg-transparent focus:outline-none"
            />
        </div>
    )
}

export default Search;