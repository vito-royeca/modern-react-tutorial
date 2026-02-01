import { useState, useEffect } from "react";

import type { INote }  from "./INote.ts";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

import './style.css';
import ContentWrapper from "~/routes/components/ContentWrapper.js";

const NotesApp = () => {
    const [notes, setNotes] = useState(() => {
        const localStorageNotes = localStorage.getItem("notes") || null;

        if (!localStorageNotes) return [];
        if (localStorageNotes.length === 0) return [];

        const storedNotes = JSON.parse(localStorageNotes) as INote[] | [];
        return storedNotes;
    });

    const deleteNote = (id: string) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this note?");

        if (confirmDelete) {
            setNotes(notes.filter(note => note.id !== id));
        }
    }

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

  return (
    <ContentWrapper>
        <div className='max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg py-4'>
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
                Notes App
            </h2>

            <NoteForm
                notes={notes}
                setNotes={setNotes}
            />
            <NoteList
                notes={notes}
                deleteNote={deleteNote}
            />
        </div>
    </ContentWrapper>
  );
}

export default NotesApp;