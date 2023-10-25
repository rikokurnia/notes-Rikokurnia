import React from 'react';
import NoteItemContent from './NoteItemContent';
import NoteItemAction from './NoteItemAction';

function NoteItem({id,title,body,createdAt,onDelete,onArchive}){
    return(
        <div className='note-item'>
            <NoteItemContent title={title} body={body} createdAt={createdAt} />
            <NoteItemAction id={id} onDelete={onDelete} />
            <NoteItemAction id={id} onArchive={onArchive} />
        </div>
    );
}

export default NoteItem;