import React from 'react';
import { NotesProvider } from './context/NotesContext';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import SearchBar from './components/SearchBar';

const App: React.FC = () => {
  return (
    <NotesProvider>
      <div>
        <h1>Notes App</h1>
        <SearchBar />
        <NoteForm />
        <NoteList />
      </div>
    </NotesProvider>
  );
};

export default App;
