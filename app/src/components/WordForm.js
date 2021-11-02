import React from 'react'
import './WordForm.css'
import { updateInput, getDefinition} from "../actions/index"
import { connect } from "react-redux"

function WordForm(props) {
    return (
        <div>
            <input type="text" className="textInput" value={props.word} onChange={(e) => props.updateInput(e.target.value)} placeholder="What would you like to define?"></input>
            <button onClick={() => props.getDefinition(props.word)} className="button">Search!</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        word: state.form.word
    }
}


export default connect(mapStateToProps, { updateInput, getDefinition}) (WordForm)