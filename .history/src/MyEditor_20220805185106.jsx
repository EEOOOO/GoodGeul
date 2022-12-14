import React from 'react';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = editorState => this.setState({editorState});
  }

  render() {
    return (
      <Editor 
      ref={this.setEditor}
      editorState={this.state.editorState} 
      onChange={this.onChange} />
    );
  }
}
export default MyEditor