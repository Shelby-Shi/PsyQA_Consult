import React from 'react';
import './OutputBox.css';

class OutputBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Your answer will display here, please be patient.'
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
        <form className='output-box' onSubmit={this.handleSubmit}>
          <label>
            <textarea className='output-box-inner' value={this.state.value} onChange={this.handleChange} />
          </label>
        </form>
      );
    }
  }

export default OutputBox;