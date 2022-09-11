import React from 'react'
import './InputBox.css'

class InputBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Please type in your question.'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Question submitted' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form className='input-box' onSubmit={this.handleSubmit}>
          <label>
            <textarea className='input-box-inner' value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default InputBox;