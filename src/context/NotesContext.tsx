import React, { createContext, useContext, useState } from 'react';
import { Note } from '../types/Note';

interface NotesContextProps {
  notes: Note[];
  addNote: (note: Note) => void;
  editNote: (id: string, updatedNote: Partial<Note>) => void;
  deleteNote: (id: string) => void;
  searchNotes: (keyword: string) => Note[];
}

const NotesContext = createContext<NotesContextProps | undefined>(undefined);

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (note: Note) => setNotes((prev) => [...prev, note]);

  const editNote = (id: string, updatedNote: Partial<Note>) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, ...updatedNote } : note))
    );
  };

  const deleteNote = (id: string) =>
    setNotes((prev) => prev.filter((note) => note.id !== id));

  const searchNotes = (keyword: string) => {
    return notes.filter(
      (note) =>
        note.title.toLowerCase().includes(keyword.toLowerCase()) ||
        note.content.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, editNote, deleteNote, searchNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) throw new Error('useNotes must be used within a NotesProvider');
  return context;
};
