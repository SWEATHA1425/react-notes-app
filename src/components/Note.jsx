import { MdDeleteForever } from 'react-icons/md';

export default function Note({id, text, date, handleDeleteNote}){
    return(
        <div className="bg-yellow-200 rounded-xl p-4 flex flex-col justify-between shadow-md w-[250px] min-h-[170px]">
            <span>{text}</span>
            <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
            <small>{date}</small>
            <MdDeleteForever 
                onClick={() => handleDeleteNote(id)}
                className="cursor-pointer hover:text-red-600"
                size="1.3em"
            />
            </div>
        </div>
    )
}
