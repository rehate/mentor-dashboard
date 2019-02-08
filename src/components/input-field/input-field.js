import React, { Component } from 'react';
import Select from 'react-select';

export default class InputField extends Component {
  
  state = {
    selectedOption: null,
  }
  
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    this.props.onMentorSelect(selectedOption.value)
  }

  render() {
   
    const { mentors } = this.props;
    const options = mentors.map((elem)=>{
      return { value: `${elem}`, label: `${elem}` }
    });
    
    const { selectedOption } = this.state;

    return (
      <Select
        placeholder="Mentor GitHub..."
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}
