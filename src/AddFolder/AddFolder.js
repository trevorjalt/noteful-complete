import React from 'react';
import './AddFolder.css';
import ApiContext from '../ApiContext';
import config from '../config';


import '../NoteListNav/NoteListNav.css'


class AddFolder extends React.Component {
    static contextType = ApiContext;

    handleClickAddFolder = (event) => {
        event.preventDefault()
        console.log(event.target.name.value)
        let folderName = event.target.name.value
        let newFolder = JSON.stringify({
            name: folderName
        })

        fetch(`${config.API_ENDPOINT}/folders`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: newFolder
        })
        .then(res => {
            if (!res.ok)
              return res.json().then(e => Promise.reject(e))
            return res.json()
          })
        .then(res => {
            console.log(res)
            this.context.addFolder(res)
            this.props.history.push('/')
        })
        .catch(error => {
            console.error({ error })
          })
    }

    render() {
        return (
           
            <form className="add-folder-form" onSubmit={e => this.handleClickAddFolder(e)}>
                <h2>Create a folder</h2>
                <div className="folder-form">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        // onChange={e => this.handleClickAddFolder.target.value)}
                    />
                    <div className="add-button">
                        <button type="submit">Add Folder</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default AddFolder