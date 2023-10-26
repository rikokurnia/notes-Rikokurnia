import React from "react";
import { getInitialData } from "../utils/index";
import NoteAppHeader from "./NoteAppHeader";
import NoteInputForm from "./NoteInputForm.jsx";
import NoteList from "./NoteList.jsx";

class NoteAppBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      archivedNotes: [],
      search: "",
      filteredNotes: [],
    };

    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onArchiveHandler.bind(this);
    this.setQuery = this.setQuery.bind(this);
    this.setFilteredNotes = this.setFilteredNotes.bind(this);
  }

  onDeleteEventHandler(id) {
    const { notes, archivedNotes } = this.state;
    const updatedNotes = notes.filter((note) => note.id !== id);
    const updatedArchivedNotes = archivedNotes.filter((note) => note.id !== id);

    this.setState({
      notes: updatedNotes,
      archivedNotes: updatedArchivedNotes,
    });
  }

  onAddNoteEventHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onArchiveHandler(id) {
    const { notes, archivedNotes } = this.state;
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: true };
      }
      return note;
    });

    const noteToArchive = updatedNotes.find((note) => note.id === id);

    if (noteToArchive) {
      this.setState({
        notes: updatedNotes.filter((note) => note.id !== id),
        archivedNotes: [...archivedNotes, noteToArchive],
      });
    }
  }

  searchArchivedNotes = (searchTerm) => {
    const { archivedNotes } = this.state;
    const filteredArchivedNotes = archivedNotes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredArchivedNotes;
  };

  setQuery(query) {
    this.setState({ search: query });
  }

  setFilteredNotes(filteredNotes) {
    this.setState({ filteredNotes });
  }

  // render state changes
  render() {
    return (
      <div>
        <NoteAppHeader
          search={this.state.search}
          setQuery={this.setQuery}
          notes={this.state.notes}
          setFilteredNotes={this.setFilteredNotes}
        />

        <div className="note-app__body">
          <NoteInputForm noteAdd={this.onAddNoteEventHandler} />
          <h2>Catatan List</h2>
          <NoteList
            notes={
              this.state.filteredNotes.length > 0
                ? this.state.filteredNotes
                : this.state.notes
            }
            onDelete={this.onDeleteEventHandler}
            onArchive={this.onArchiveHandler}
          />
          <h2>Arsip</h2>
          <NoteList
            notes={
              this.state.search.length > 0
                ? this.searchArchivedNotes(this.state.search)
                : this.state.archivedNotes
            }
            onDelete={this.onDeleteEventHandler}
          />
        </div>
      </div>
    );
  }
}

export default NoteAppBody;
