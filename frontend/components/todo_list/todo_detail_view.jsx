import React from 'react';

class TodoDetailView extends React.Component {
  constructor(props){
    super(props);
    const {body, done} = this.props.todo;
    this.state = {
      view: "",
      body: body,
      done: done,
      detail: false
    };
    this.toggleView = this.toggleView.bind(this);
  }

  toggleView() {
    const {view, body, done, detail} = this.state;
    if (detail) {
      this.setState({view: ""});
    } else {
      this.setState({view:
        (<li>
          <li>{body}</li>
          <button onClick={this.removeTodo}>Remove</button>
        </li>)
      });
    }
    this.setState({detail: !detail});
  }

  render() {
    const {view, body, done, detail } = this.state;
    return (
      <>
        <button onClick={this.toggleView}>{detail ? "Hide" : "Show"}</button>
        {view}
      </>
    );
  }
}

export default TodoDetailView;
