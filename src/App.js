import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const handleBoldClick = () => {
    setText((prevText) => prevText + '**bold text**');
  };

  const handleItalicClick = () => {
    setText((prevText) => prevText + '_italic text_');
  };

  const handleUnderlineClick = () => {
    setText((prevText) => prevText + '__underlined text__');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>NoteItDown</h1>
        <p>
          Take notes and format them as you like:
        </p>
        <div className="button-container">
          <button onClick={handleBoldClick}>Bold</button>
          <button onClick={handleItalicClick}>Italic</button>
          <button onClick={handleUnderlineClick}>Underline</button>
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="textarea"
          placeholder="Start typing your notes here..."
        />
      </header>
    </div>
  );
}

export default App;

