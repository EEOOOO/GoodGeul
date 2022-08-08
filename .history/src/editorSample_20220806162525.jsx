'use strict';
import React from 'react';

const {Editor, EditorState} = Draft;
class PlainTextEditorExample extends React.Component{

    constructor(props){
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => {this.setState({editorState})};
        this.logState = () => console.log(this.state.editorState.toJS());

    }
}