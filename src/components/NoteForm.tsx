import React, { useState } from 'react';
import { useNotes } from '../context/NotesContext';
import { Note } from '../types/Note';
import { v4 as uuidv4 } from 'uuid';

const NoteForm: React.FC = () => {
  const { addNote } = useNotes();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newNote: Note = {
      id: uuidv4(),
      title,
      content,
      createdAt: new Date(),
    };
    addNote(newNote);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
