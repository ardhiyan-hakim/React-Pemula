import React from "react";
import NoteCardActive from "../NoteCard/NoteCardActive";

function filterActive(notes, query) {
  return notes.filter((note) => {
    return note.archived === false && note.title.toLowerCase().includes(query);
  });
}

function NoteCtnActive({ notes, query, onDelete, onArchive }) {
  const filteredNotes = filterActive(notes, query);

  return (
    <div className="note-container__active">
      <h2>Active Note</h2>
      <div className="note-container__card">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => {
            return (
              <NoteCardActive
                key={note.id}
                note={note}
                onDelete={onDelete}
                onArchive={onArchive}
              />
            );
          })
        ) : (
          <div className="empty">
            <p>Tidak Ada Data Active Yang Tersedia</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default NoteCtnActive;
