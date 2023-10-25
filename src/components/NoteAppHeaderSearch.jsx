import React from 'react';

class NoteAppHeaderSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input:'',
        };
        this.inputEventListener = this.inputEventListener.bind(this);
    }

        // condition while had been searched
    inputEventListener(event) {
        this.setState(() => {
            return {
              input: event.target.value,
                }
            }    
        )
    }

    render(){
        return(
            <div className='note-search'>
                <input type="text" placeholder='Cari catatan ...' value={this.state.input} onInput={this.inputEventListener}/>
            </div>
        );
    }
}

export default NoteAppHeaderSearch;


