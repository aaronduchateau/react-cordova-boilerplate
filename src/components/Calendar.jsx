import React, { PropTypes, Component } from 'react';


import Table from 'material-ui/lib/table/table';
import TableBody from 'material-ui/lib/table/table-body';
import TableFooter from 'material-ui/lib/table/table-footer';
import TableHeader from 'material-ui/lib/table/table-header';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';

import DatePicker from 'material-ui/lib/date-picker/date-picker';
import DatePickerDialog from 'material-ui/lib/date-picker/date-picker-dialog';

import TimePicker from 'material-ui/lib/time-picker';


export default class Calendar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      deselectOnClickaway: true,
      height: '400px',
    };
  }
  

  render() {
    return (
      <div style={{backgroundColor:'white'}}>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
          onRowSelection={this._onRowSelection}>
          <TableHeader enableSelectAll={this.state.enableSelectAll}>
            <TableRow>
              <TableHeaderColumn colSpan="3" style={{textAlign: 'left'}}>
                <DatePicker hintText="Gig Starts Date" />
                <TimePicker
                  format="ampm"
                  hintText="Gig Starts Time" />
                <DatePicker hintText="Gig Ends Date" />
                <TimePicker
                  format="ampm"
                  hintText="Gig Ends Time" />
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn >Day</TableHeaderColumn>
              <TableHeaderColumn >Status</TableHeaderColumn>
              <TableHeaderColumn >Venue</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}>
          <TableRow selected={true}>
              <TableRowColumn>weds (28/11)</TableRowColumn>
              <TableRowColumn>booked</TableRowColumn>
              <TableRowColumn>Cozmic Pizza</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>thurs (1/12)</TableRowColumn>
              <TableRowColumn>booked</TableRowColumn>
              <TableRowColumn>Jazz Station</TableRowColumn>
            </TableRow>
            <TableRow selected={true}>
              <TableRowColumn>fri (2/12)</TableRowColumn>
              <TableRowColumn>blocked</TableRowColumn>
              <TableRowColumn>n/a</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>sat (3/12)</TableRowColumn>
              <TableRowColumn>blocked</TableRowColumn>
              <TableRowColumn> -- </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>sun (4/12)</TableRowColumn>
              <TableRowColumn>open</TableRowColumn>
              <TableRowColumn> -- </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>mon (5/12)</TableRowColumn>
              <TableRowColumn>booked</TableRowColumn>
              <TableRowColumn>McDonald Theatre</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>tues (6/12)</TableRowColumn>
              <TableRowColumn>booked</TableRowColumn>
              <TableRowColumn>Cozmic Pizza</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
          
      </div>
    );
  }
}

