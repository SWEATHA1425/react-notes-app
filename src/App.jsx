import { useEffect, useState } from 'react'
import './App.css'
import { nanoid } from 'nanoid'
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

function App() {

  const LOCAL_STORAGE_KEY = "react-notes-app";
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem(LOCAL_STORAGE_KEY)
    return savedNotes ? JSON.parse(savedNotes) : [{
      id : nanoid(),
      text : "This is my first note",
      date : "01/08/2025"
    },
    {
      id : nanoid(),
      text : "This is my second note",
      date : "01/08/2025"
    },
    {
      id : nanoid(),
      text : "This is my third note",
      date : "01/08/2025"
    }]
  })


  const [darkMode, setDarkMode] = useState(false);
  const [searchText, setSearchText] = useState("");


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);


  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id : nanoid(),
      text : text,
      date : date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote]
    setNotes(newNotes);
  };


  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  
  const handleEditNote = (id, newText) => {
    const updatedNotes = notes.map((note)=>
      note.id === id ? {...note, text : newText} : note
    )
    setNotes(updatedNotes);
  }

  return(
    <div>
      <div >
        <Header handleToggleDarkMode = {setDarkMode}/>
        <Search HandleTextSearch = {setSearchText}/>
        <NotesList 
              notes = {notes.filter((note) => note.text.toLowerCase().includes(searchText))}
              handleAddNote={addNote}
					    handleDeleteNote={deleteNote}
              handleEditNote={handleEditNote}
        />
      </div>
    </div>
  )
}

export default App;
