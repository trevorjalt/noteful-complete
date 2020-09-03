import React from 'react';
import CircleButton from '../CircleButton/CircleButton';

import '../NoteListNav/NoteListNav.css'


class AddFolder extends React.Component {
    // static contextType = ApiContext;

    // handleClickAddFolder = (name) => {
    //     name.preventDefault()
    //     let newId =
    // }

    render() {
        return (
           
            <form className="Noteful-form" onSubmit={e => this.handleSubmit(e)}>
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
                </div>
                <div className="add-button">
                    <button>Add Folder</button>
                </div>
            </form>
        )
    }
}

export default AddFolder