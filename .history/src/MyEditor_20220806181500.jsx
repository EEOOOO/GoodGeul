import React from 'react';
import {Editor, EditorState, convertToRaw} from 'draft-js';
import 'draft-js/dist/Draft.css';

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = editorState => {
      const block = convertToRaw(this.state.editorState.getCurrentContent()).blocks[0].text;
    console.log(block);
      this.setState({editorState});
    }
    this.setEditor = (editor) => {
      this.editor = editor;
    };
    this.focusEditor = () => {
      if (this.editor) {
        this.editor.focus();
      }
    };
  }

  componentDidMount() {
    this.focusEditor();
  }

  render() {
    return (
      <>
        <Editor 
          ref={this.setEditor}
          editorState={this.state.editorState} 
          onChange={this.onChange} 
          value={this.value}
        />
      </>
    );
  }
}
export default MyEditor