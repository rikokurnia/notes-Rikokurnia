import React from "react";
import {getInitialData,showFormattedDate} from '../utils/index'
// import NoteInput from "./NoteInput.jsx";
import NoteInputForm from "./NoteInputForm.jsx";
import NoteList from "./NoteList.jsx";

class NoteAppBody extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            showDate: showFormattedDate()
        }

        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this)
        this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this)
    }

    onDeleteEventHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        const showDate = this.state.showDate.filter((note) => note.id !== id);
            this.setState({notes},showDate);
    }

    onAddNoteEventHandler({title,body}) {
        this.setState((prevState) => {
            return{
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt:+new Date(),
                        archived:'false'
                    }
                ]
            }
        })
    }


    // render state changes
        render(){
            return (
                <div className="note-app__body">
                    <NoteInputForm noteAdd={this.onAddNoteEventHandler} />
                    <h2>Catatan List</h2>
                    <p className="notes-list__empty-message">Tidak ada catatan</p>
                    <NoteList notes={this.state.notes} onDelete={this.onDeleteEventHandler} />
                    <h2>Arsip</h2>
                    <p className="notes-list__empty-message">Tidak ada catatan</p>
                </div>
            )
        }
}

export default NoteAppBody;