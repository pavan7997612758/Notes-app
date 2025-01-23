import React, { useState } from 'react';
import { useNotes } from '../context/NotesContext';

const SearchBar: React.FC = () => {
  const { searchNotes } = useNotes();
  const [keyword, setKeyword] = useState('');
  const [filteredNotes, setFilteredNotes] = useState([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyword(value);
    setFilteredNotes(searchNotes(value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search notes..."
        value={keyword}
        onChange={handleSearch}
      />
      {filteredNotes.length > 0 && (
        <div>
          {filteredNotes.map((note) => (
            <div key={note.id} className="note-card">
              <h3>{note.title}</h3>
              <p>{note.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
