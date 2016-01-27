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

import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

import IconButton from 'material-ui/lib/icon-button';
import IconAdd from 'material-ui/lib/svg-icons/action/note-add';
import IconSearch from 'material-ui/lib/svg-icons/action/search';


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
      calendarView: true
    };
  }
  
  handleViewToggle = () => this.setState({calendarView: !this.state.calendarView});
  render() {
    var toggleCalendarViewText = this.state.calendarView ? "New Gig" : "Calendar";
    return (
      <div style={{backgroundColor:'white'}}>
        <Toolbar style={{backgroundColor:'white'}}>
          <ToolbarGroup float="right">
            <IconButton  onTouchTap={this.handleViewToggle}>
              <IconSearch />
            </IconButton>
            <IconButton  onTouchTap={this.handleViewToggle}>
              <IconAdd />
           </IconButton>
          </ToolbarGroup>
        </Toolbar>
        {!this.state.calendarView && 
            <div style={{marginLeft: '15px'}}>
              <div style={{marginLeft: '30px'}}>
              <h4>Schedule a new gig:</h4>
                <TextField
                  hintText="Gig title"/>
                <TextField
                  hintText="Gig Location"/>
                <br/>
                <TextField
                  hintText="Gig Description"
                  multiLine={true} />
                <br/>  
                <br/> 
                <DatePicker hintText="Gig Starts Date" />
                <TimePicker
                  format="ampm"
                  hintText="Gig Starts Time" />
                <br/>  
                <br/> 
                <DatePicker hintText="Gig Ends Date" />
                <TimePicker
                  format="ampm"
                  hintText="Gig Ends Time" />
                  <br/>
                  <RaisedButton label="Save new gig" primary={true} onTouchTap={this.handleViewToggle}/>
              </div>
            </div>}
        {this.state.calendarView && <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
          onRowSelection={this._onRowSelection}>
          <TableHeader enableSelectAll={this.state.enableSelectAll}>
            
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
              <TableRowColumn style={{color:'#00bcd4'}}>booked</TableRowColumn>
              <TableRowColumn>Cozmic Pizza</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>thurs (1/12)</TableRowColumn>
              <TableRowColumn style={{color:'#f5182d'}}>booked</TableRowColumn>
              <TableRowColumn>Jazz Station</TableRowColumn>
            </TableRow>
            <TableRow selected={true}>
              <TableRowColumn>fri (2/12)</TableRowColumn>
              <TableRowColumn style={{color:'#f5182d'}}>blocked</TableRowColumn>
              <TableRowColumn>n/a</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>sat (3/12)</TableRowColumn>
              <TableRowColumn style={{color:'#00bcd4'}}>blocked</TableRowColumn>
              <TableRowColumn> -- </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>sun (4/12)</TableRowColumn>
              <TableRowColumn style={{color:'#00a02d'}}>open</TableRowColumn>
              <TableRowColumn> -- </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>mon (5/12)</TableRowColumn>
              <TableRowColumn style={{color:'#00bcd4'}}>booked</TableRowColumn>
              <TableRowColumn>McDonald Theatre</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>tues (6/12)</TableRowColumn>
              <TableRowColumn style={{color:'#00bcd4'}}>booked</TableRowColumn>
              <TableRowColumn>Cozmic Pizza</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>wed (7/12)</TableRowColumn>
              <TableRowColumn style={{color:'#00a02d'}}>open</TableRowColumn>
              <TableRowColumn> -- </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>}
          
      </div>
    );
  }
}

