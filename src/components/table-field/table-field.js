import React, {Component} from 'react';
import Trows from '../table-rows';

export default class TableField extends Component {

  render() {
    const { mentorTable } = this.props;
    const Thead = mentorTable.slice(0)[0].map((el) => <th key={el}><span>{el}</span></th>);
    const tBody = mentorTable.slice(1).map((row) => <Trows rows={row}/>);
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            {Thead}
          </tr>
        </thead>
        <tbody>
          {tBody}
        </tbody>
      </table>  
    )
  }
}
