import { MdDeleteForever, MdEdit } from 'react-icons/md'
import { useState } from 'react';

export default function Note({id, text, date, handleDeleteNote, handleEditNote}){

    const [isEditing, setIsEditing] = useState(false);
    const [isEditable, setIsEditable] = useState(text);

    const handleSaveClick = () =>{
        handleEditNote(id, isEditable);
        setIsEditing(false);
    }

    return(
        <div className="bg-yellow-200 rounded-xl p-4 flex flex-col justify-between shadow-md w-[250px] min-h-[170px]">
            {isEditing ? (
                <textarea
                rows="8"
                cols="10"
                value={isEditable}
                onChange={(e) => setIsEditable(e.target.value)}
                />
            ) : (
                <span>{text}</span>
            )}
            <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
            <small>{date}</small>
            <div>
                {isEditing ? (
                    <button onClick={handleSaveClick}>Save</button>
                ) : (
                    <MdEdit
                    onClick={() => setIsEditing(true)}
                    className="edit-icon"
                    title="Edit note"
                    />
                )}
            </div>
            <MdDeleteForever
                onClick={() => handleDeleteNote(id)}
                className="cursor-pointer hover:text-red-600"
                size="1.5em"
            />
            </div>
        </div>
    )
}

