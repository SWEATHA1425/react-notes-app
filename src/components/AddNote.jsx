
import { useState } from "react";

function AddNote({handleAddNote}){

	const [noteText, setNoteText] = useState("");
	const charLimit = 300;

	const handleChange = (event) =>{
		if(charLimit - event.target.value.length > 0){
			setNoteText(event.target.value);
		}
	}

	const handleSaveNote = () =>{
		if(noteText.length > 0){
			handleAddNote(noteText);
			setNoteText("");
		}
	}


	return(
		<div className="bg-teal-300 rounded-xl p-4 flex flex-col justify-between shadow-md w-[250px] min-h-[170px]">
			<textarea 
				rows='10'
				cols='10'
				placeholder="Add note..."
				onChange={handleChange}
				value={noteText}
				className="resize-none bg-transparent focus:outline-none"
			></textarea>
			<div className="flex justify-between items-center mt-4 text-sm text-gray-700">
			<small>{charLimit - noteText.length} characters left</small>

			<button className="bg-white px-3 py-1 rounded shadow hover:bg-gray-100"
					onClick={handleSaveNote}>save</button>
			</div>
		</div>
	)
}

export default AddNote;