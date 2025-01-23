import React from 'react';
import { useNotes } from '../context/NotesContext';

const NoteList: React.FC = () => {
  const { notes, deleteNote } = useNotes();

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id} className="note-card">
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <small>{new Date(note.createdAt).toLocaleString()}</small>
          <button onClick={() => deleteNote(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
