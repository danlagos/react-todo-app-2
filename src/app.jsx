class Todo extends React.Component {
  render(){
    return <div className="todo">
              <span>
                <input type="checkbox" /> {this.props.name}
              </span>
            </div>
  }
}


ReactDOM.render(
  <Todo name="Todo 1" />,
  document.getElementById('root'));
