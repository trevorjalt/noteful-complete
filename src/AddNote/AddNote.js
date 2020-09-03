import React from 'react';
import './AddNote.css';
import ApiContext from '../ApiContext';
import config from '../config';


import '../NoteListNav/NoteListNav.css'

class AddNote extends React.Component {

    render(){
        return(
            <form className="add-note-form" onSubmit={e => this.handleClickAddFolder(e)}>
                <h2>Create a Note</h2>
                <div className="note-form">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        // onChange={e => this.handleClickAddFolder.target.value)}
                    />
                    <label htmlFor="content">Content</label>
                    <textarea
                        type="text"
                        name="content"
                        id="content"  
                    />
                    <label htmlFor="folder-name">Folder</label>
                    <select name="folder-name" id="folder-name">
                        <option value="...">...</option>
                    </select>
                    <div className="add-button">
                   
                        <button type="submit">Add Note</button>
                    </div>
                </div>
            </form>
        )
    }
}
export default AddNote
    