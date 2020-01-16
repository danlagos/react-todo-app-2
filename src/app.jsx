class Todo extends React.Component {

constructor(props){
  super(props);

  this.state = { done: (this.props.done == "true" && props.done),
                  text: props.text 
                };

  this.handleClick = this.handleClick.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

  handleClick(event){
    this.setState(
      state => ({
        done: !state.done
      }), 
      function(event){
        this.handleSubmit(event)
      }
    );
  }

  handleChange(event){
    let text = event.target.value;

    this.setState( state => ({
      text: text
    }));
  }

    handleSubmit(event){
      console.log("this is where the submit will happen")
      // this.setState(state => ({
        
      // }));
    }

  render(){

    return <div className="todo">
              <span>
                <input type="checkbox" checked={this.state.done} 
                                        onClick={this.handleClick}/> 
                <input type="text" value={this.state.text} 
                                   onChange={this.handleChange}
                                   onBlur={this.handleSubmit}/>
              </span>
            </div>
  }
}

ReactDOM.render(
  <Todo text="Todo 1" done="true"/>,
  document.getElementById('root'));