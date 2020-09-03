import React from 'react';
import './AddNote.css';
import ApiContext from '../ApiContext';
import config from '../config';


import '../NoteListNav/NoteListNav.css'

class AddNote extends React.Component {
    static contextType = ApiContext;

    handleClickAddNote = (event) => {
        event.preventDefault()
        // console.log(event.currentTarget)
        // console.log(event.target.name.value)
        // console.log(event.target.content.value)
        // console.log(event.target['folder-name'].id)
        let noteName = event.target.name.value
        let noteContent= event.target.content.value
        let selectedFolder = event.target['folder-name'].value
        let newNote = JSON.stringify({
            name: noteName,
            modified: new Date(),
            folderId: selectedFolder,
            content: noteContent   
        })

        fetch(`${config.API_ENDPOINT}/notes`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: newNote
        })
        .then(res => {
            if (!res.ok)
              return res.json().then(e => Promise.reject(e))
            return res.json()
          })
        .then(res => {
            console.log(res)
            this.context.addNote(res)
            this.props.history.push('/')
        })
        .catch(error => {
            console.error({ error })
          })
    }

    render(){
        const { folders=[] } = this.context
        return(
            <form className="add-note-form" onSubmit={e => this.handleClickAddNote(e)}>
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
                        {folders.map(folder =>
                        <option key={folder.id} name={folder.id} value={folder.id}>{folder.name}</option>)}
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
    