import React from "react";

class NoteInputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            body:'',
            bodyCharLimit:50
        }

        this.onTitleEventHandler = this.onTitleEventHandler.bind(this);
        this.onBodyEventHandler = this.onBodyEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleEventHandler(event){
        this.setState(() => {
            return{
                title: event.target.value
            }
        })
    }

    onBodyEventHandler(event) {
        const newBody = event.target.value;
        if (newBody.length <= this.state.bodyCharLimit) {
            this.setState({
                body: newBody,
            });
        }
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.noteAdd(this.state)
    }

 
   

    render() {
        const remainingChars = this.state.bodyCharLimit - this.state.body.length;
    return(
            <div className="note-input">
                <h2>Tambahkan Catatan</h2>
            <form onSubmit={this.onSubmitEventHandler}>
                <p className="note-input__title__char-limit">Char Limit : {remainingChars} </p>
                <input type="text" placeholder="Isi judul anda ... " value={this.state.title} onChange={this.onTitleEventHandler}/>
                <textarea className="note-input__body" type="text" placeholder="Tulis Catatanmu disini ... " value={this.state.body} onChange={this.onBodyEventHandler} />
                <button  type="submit">Buat</button>
            </form>
            </div>
        )
    }
}

export default NoteInputForm;