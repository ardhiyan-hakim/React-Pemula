import React from "react";
import NoteCardArchived from "../NoteCard/NoteCardArchived";

function filterArchived(notes, query) {
  return notes.filter((note) => {
    return note.archived === true && note.title.toLowerCase().includes(query);
  });
}

function NoteCtnArchived({ notes, query, onDelete, onRestore }) {
  const filteredNotes = filterArchived(notes, query);

  return (
    <div className="note-container__archived">
      <h2>Archived Note</h2>
      <div className="note-container__card">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => {
            return (
              <NoteCardArchived
                key={note.id}
                note={note}
                onDelete={onDelete}
                onRestore={onRestore}
              />
            );
          })
        ) : (
          <div className="empty">
            <p>Tidak Ada Data Archived Yang Tersedia</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default NoteCtnArchived;
