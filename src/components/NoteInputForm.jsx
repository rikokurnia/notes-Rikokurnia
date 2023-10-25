import React from "react";

class NoteInputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            body:'',
        }

        this.onTitleEventHandler = this.onTitleEventHandler.bind(this);
        this.onBodyEventHandler = this.onBodyEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
    }

    onTitleEventHandler(event){
        this.setState(() => {
            return{
                title: event.target.value
            }
        })
    }

    onBodyEventHandler(event) {
        this.setState(() => {
            return{
                body: event.target.value
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.noteAdd(this.state)
    }

   

    render() {
        return(
            <div className="note-input">
                <h2>Tambahkan Catatan</h2>
            <form type="submit" onSubmit={this.onSubmitEventHandler}>
                <p className="note-input__title__char-limit">Char Limit : </p>
                <input type="text" placeholder="Isi judul anda ... " value={this.state.title} onChange={this.onTitleEventHandler}/>
                <textarea className="note-input__body" type="text" placeholder="Tulis Catatanmu disini ... " value={this.state.body} onChange={this.onBodyEventHandler} />
                <button>Buat</button>
            </form>
            </div>
        )
    }
}

export default NoteInputForm;