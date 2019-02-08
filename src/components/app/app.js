import React, {Component} from 'react';
import InputField from '../input-field';
import TableField from '../table-field';
import './app.css';

export default class App extends Component {
  state = {
    mentorTable: [[],[]]
  };

  dataBase = this.props.dataBase;

  onMentorSelect = (value) => {
    const mentorData = [];
    let mentor = value;
    let students = this.dataBase[3][mentor].students;
    let tasknames = this.dataBase[2];

    for (let i=-1; i<tasknames.length; i++ ) {
      if (i === -1) {
        mentorData.push(['#', ...students]);
      } else {
        let taskMarks = [];
        students.forEach(student => {
          taskMarks.push(this.dataBase[4][student][tasknames[i]])
        });
        mentorData.push([this.dataBase[5][tasknames[i]][2],this.dataBase[5][tasknames[i]][0], ...taskMarks]);
      }
    }
    console.log(mentorData);
    this.setState({mentorTable: mentorData});
  };

  render() {
    return (
      <div>
        <div className="container mt-3 mb-3 inputField">
          <InputField mentors={this.dataBase[0]} onMentorSelect={(value) => {this.onMentorSelect(value)}}/>
        </div>
        <div className="container mt-3 mb-3 tableField" style={{overflow:'auto'}}>
          <TableField mentorTable={this.state.mentorTable}/>
        </div>
      </div>      
    )
  }
}