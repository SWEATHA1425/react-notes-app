import React from "react";

export default function Header({handleToggleDarkMode}){
    return(
        <div className="flex justify-between items-center p-4">
            <h1 className="text-3xl font-bold">Notes</h1>
            <button
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
                onClick={() => handleToggleDarkMode((prev) => !prev)}
            >
                Toggle Dark
            </button>
        </div>
    )
}