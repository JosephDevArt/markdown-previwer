import React from "react";

import "./App.scss";
import marked from "marked";
class App extends React.Component {
  state = {
    markdown: ""
  };
  componentDidMount() {
    const INITIAL_MARKDOWN =
      "# Markdown Text goes here\n## You can also make subheadings\n\nOne of the **trickiest** parts of getting this project to work was learning how to use `dangerouslySetInnerHTML` to make the previewer display the output of [marked.js](https://github.com/markedjs/marked/blob/master/README.md) as HTML instead of a string.\n\nAccording to the React Documentation,\n>dangerouslySetInnerHTML is React’s replacement for using innerHTML in the browser DOM. In general, setting HTML from code is risky because it’s easy to inadvertently expose your users to a cross-site scripting (XSS) attack.\n\nExample Code:\n```\nfunction createMarkup() {\n  return {__html: 'First &middot; Second'};\n}\n\nfunction MyComponent() {\n  return <div dangerouslySetInnerHTML={createMarkup()} />;\n}\n```\n\nJust remember to:\n- Search, Read, Ask\n- Ask for help on the Forum (that's what worked for me.)\n\n";
    this.setState({
      markdown: INITIAL_MARKDOWN
    });
  }
  handleChange(event) {
    this.setState({
      markdown: event.target.value
    });
  }
  render() {
    // ALLOWS LINE BREAKS WITH RETURN BUTTON
    marked.setOptions({
      breaks: true
    });

    return (
      <div className="App">
        <h1 className="title">Markdown Text Previewer</h1>
        <textarea
          onChange={this.handleChange.bind(this)}
          id="editor"
          className="editor"
          value={this.state.markdown}
        ></textarea>
        <div
          id="preview"
          className="preview"
          dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
        ></div>
      </div>
    );
  }
}

export default App;
