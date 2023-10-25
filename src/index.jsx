import React from 'react';
import { createRoot } from 'react-dom/client';
import NoteAppBody from './components/NoteAppBody.jsx';
import NoteAppHeader from './components/NoteAppHeader.jsx';

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <>
      <NoteAppHeader />
      <NoteAppBody />
    </>
)