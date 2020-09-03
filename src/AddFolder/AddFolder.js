import React from 'react';
import './AddFolder.css';


import '../NoteListNav/NoteListNav.css'


class AddFolder extends React.Component {
    // static contextType = ApiContext;

    // handleClickAddFolder = (name) => {
    //     name.preventDefault()
    //     let newId =
    // }

    render() {
        return (
           
            <form className="add-folder-form" onSubmit={e => this.handleSubmit(e)}>
                <h2>Create a folder</h2>
                <div className="folder-form">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="registration__control"
                        name="name"
                        id="name"
                        onChange={e => this.updateName(e.target.value)}
                    />
                    <div className="add-button">
                        <button>Add Folder</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default AddFolder