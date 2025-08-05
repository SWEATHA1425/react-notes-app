import { useState } from "react";
import Note from './Note';
import AddNote from './AddNote';

function NotesList({notes, handleAddNote, handleDeleteNote, handleEditNote}){

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
			{notes.map((note) => (
				<Note
                    key={note.id}
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
					handleEditNote={handleEditNote}
				/>
			))}
			<AddNote handleAddNote={handleAddNote} />
		</div>
    )

}

export default NotesList;