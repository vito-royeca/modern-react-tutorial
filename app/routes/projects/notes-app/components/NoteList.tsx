import type { INote } from "../INote";
import Note from "./Note";

type NoteListProps = {
    notes: INote[];
    deleteNote: (id: string) => void;
};

const NoteList: React.FC<NoteListProps> = ({
    notes,
    deleteNote
}) => {
    if (notes.length === 0) {
        return (
            <p className="text-center text-gray-500">No notes available.</p>
        );
    }

    return ( 
        <div className="space-y-4">
            {notes.map(note => (
                <Note
                    key={note.id}
                    note={note}
                    deleteNote={deleteNote} />
            ))}
            
        </div>
     );
}

export default NoteList;