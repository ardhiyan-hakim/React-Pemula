import React from "react";
import NoteLogo from "../NoteHeader/NoteLogo";
import NoteSearchBar from "../NoteHeader/NoteSearchBar";
import NoteSignInBtn from "../NoteHeader/NoteSignInBtn";

function NoteHeader({ query, onQuery }) {
  return (
    <header>
      <NoteLogo />
      <NoteSearchBar query={query} onQuery={onQuery} />
      <NoteSignInBtn />
    </header>
  );
}

export default NoteHeader;