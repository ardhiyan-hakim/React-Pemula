import React from "react";
import NoteFooter from "./NoteApp/NoteFooter";
import NoteHeader from "./NoteApp/NoteHeader";
import NoteMain from "./NoteApp/NoteMain";

import { getInitialData } from "./utils/data";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      query: "",
    };

    this.onQuerySubmitEventHandler = this.onQuerySubmitEventHandler.bind(this);
    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
    this.onRestoreEventHandler = this.onRestoreEventHandler.bind(this);
  }

  onAddNoteEventHandler({ title, body }) {
    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    this.setState((prevState) => {
      return {
        notes: [...prevState.notes, newNote],
      };
    });
  }

  onQuerySubmitEventHandler(event, query) {
    event.preventDefault();
    this.setState({ query });
  }

  onArchiveEventHandler(id) {
    const currNotes = [...this.state.notes];
    const index = currNotes.findIndex((note) => note.id === id);
    currNotes[index].archived = true;
    this.setState({ notes: currNotes });
  }

  onRestoreEventHandler(id) {
    const currNotes = [...this.state.notes];
    const index = currNotes.findIndex((note) => note.id === id);
    currNotes[index].archived = false;
    this.setState({ notes: currNotes });
  }

  onDeleteEventHandler(id) {
    const newNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: newNotes });
  }

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <NoteHeader
            query={this.state.query}
            onQuery={this.onQuerySubmitEventHandler}
          />
          <NoteMain
            notes={this.state.notes}
            query={this.state.query}
            onAddNote={this.onAddNoteEventHandler}
            onDelete={this.onDeleteEventHandler}
            onArchive={this.onArchiveEventHandler}
            onRestore={this.onRestoreEventHandler}
          />
          <NoteFooter />
        </div>
      </div>
    );
  }
}

export default NoteApp;
