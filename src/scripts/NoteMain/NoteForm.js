import React from "react";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      maxCharTitle: 50,
      maxCharBody: 200,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onContentChangeEventHandler = this.onContentChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value.slice(0, this.state.maxCharTitle),
      };
    });
  }

  onContentChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value.slice(0, this.state.maxCharBody),
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.onAddNote(this.state);
  }

  render() {
    return (
      <form
        onSubmit={(event) => {
          this.onSubmitEventHandler(event);
        }}
      >
        <h1>Create Your Notes</h1>
        <label htmlFor="notes-title">Title</label>
        <input
          type="text"
          name="notes-title"
          id="notes-title"
          placeholder="Note's Title"
          autoFocus
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <p>Remaining characters : {this.state.maxCharTitle - this.state.title.length}</p>

        <label htmlFor="notes-content">Content</label>
        <textarea
          name="notes-content"
          id="notes-content"
          cols="50"
          rows="4"
          placeholder="Type something ..."
          value={this.state.body}
          onChange={this.onContentChangeEventHandler}
        ></textarea>
        <p>Remaining characters : {this.state.maxCharBody - this.state.body.length}</p>       

        <button type="submit">SUBMIT</button>
      </form>
    );
  }
}

export default NoteForm;
