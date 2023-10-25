import React from 'react';
import NoteAppHeaderSearch from './NoteAppHeaderSearch';

function NoteAppHeader(){
    return(
        <div className='note-app__header'>
            <h1>Notes</h1>
         <NoteAppHeaderSearch />
        </div>
    );
}

export default NoteAppHeader;