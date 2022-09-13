import React from "react";
import NoteForm from "../NoteMain/NoteForm";
import NoteCtnActive from "../NoteMain/NoteCtnActive";
import NoteCtnArchived from "../NoteMain/NoteCtnArchived";

function NoteMain({ notes, query, onAddNote, onDelete, onArchive, onRestore }) {
  return (
    <main>
      <div className="note-form">
        <NoteForm onAddNote={onAddNote} />
      </div>

      <div className="note-container">
        <NoteCtnActive
          notes={notes}
          query={query}
          onDelete={onDelete}
          onArchive={onArchive}
        />
        <NoteCtnArchived
          notes={notes}
          query={query}
          onDelete={onDelete}
          onRestore={onRestore}
        />
      </div>
    </main>
  );
}

export default NoteMain;
