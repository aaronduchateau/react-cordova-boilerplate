import React, { PropTypes, Component } from 'react';



//Import statement:
import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';
import NavigationExpandMoreIcon from 'material-ui/lib/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/lib/menus/menu-item';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import RaisedButton from 'material-ui/lib/raised-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';

import List from 'material-ui/lib/lists/list';
import Divider from 'material-ui/lib/divider';
import ListItem from 'material-ui/lib/lists/list-item';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox.js';
import ContentSend from 'material-ui/lib/svg-icons/content/send.js';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts.js';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade.js';
import ArrowDown from 'material-ui/lib/svg-icons/navigation/arrow-drop-down.js';
import AutoComplete from 'material-ui/lib/auto-complete.js';

import RightIconMenu from 'material-ui/lib/auto-complete.js';

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';

import IconStore from 'material-ui/lib/svg-icons/action/store';
import IconGroup from 'material-ui/lib/svg-icons/social/group';
import IconPerson from 'material-ui/lib/svg-icons/social/person';




import Avatar from 'material-ui/lib/avatar';

const iconClass = {float: 'right', marginTop: '3px'};
const Colors = {darkBlack: 'black'}
var searchStyle = {marginLeft: '25px'}

export default class Profile extends Component {
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
      openSearchDialogue: false
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleSearchToggle = () => this.setState({openSearchDialogue: !this.state.openSearchDialogue});
  

  render() {
    var searchArea;
    if(this.state.openSearchDialogue){
      searchArea = (
        <div style={searchStyle}>
          <AutoComplete
            floatingLabelText="Search Users of MIK"
            dataSource={['Aaron DuChateau', 'Beatrice Johnson', 'Cathy Clark', 'Denis Denixon', 'Ellie Smith', 'Tony Simpleton', 'Zane Gooley', 'Matt Sextant']} />
        </div>  );
    } else {
      searchArea = (<div></div>);
    }

     const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleClose} />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose} />,
    ];
      
  
    return (
      <div style={{backgroundColor:'white'}}>
        <Toolbar style={{backgroundColor:'white'}}>
          <ToolbarGroup float="right">
            <IconButton onTouchTap={this.handleSearchToggle} tooltip="Find a person">
              <IconPerson />
            </IconButton>
            <IconButton onTouchTap={this.handleOpen} tooltip="Top 10">
              <IconGroup />
            </IconButton>
              <IconButton onTouchTap={this.handleOpen} tooltip="Find a Gig">
                <IconStore />
              </IconButton>
          </ToolbarGroup>
        </Toolbar>

        {searchArea}
          
          <div>
            <h4 style={{marginLeft: '15px'}}>Quick Facts:</h4>
              <div style={{marginLeft: '30px', marginRight: '20px'}}>
                <span style={{color: Colors.darkBlack}}>Location:</span> Eugene, OR
                <br/><br/>
                <Divider />
                <br/>
                <span style={{color: Colors.darkBlack}}>What I play:</span> Piano, Drums, Vocalist
                <br/><br/>
                <Divider />
                <br/>
                <span style={{color: Colors.darkBlack}}>Experience:</span> 50 years
              </div>
          </div>
          <br/>
          <Divider />
          <div>
            <h4 style={{marginLeft: '15px'}}>Media:</h4>
              <div style={{overflowX: 'scroll'}}>
                <img style={{width:'100px',height:'80px'}} src="http://www.totalprosports.com/wp-content/uploads/2013/02/22-carl-edwards-playing-guitar-with-zac-brown-band-athletes-who-were-musicians.jpg"/>
                <img style={{width:'100px',height:'80px'}} src="http://www.totalprosports.com/wp-content/uploads/2013/02/22-carl-edwards-playing-guitar-with-zac-brown-band-athletes-who-were-musicians.jpg"/>
                <img style={{width:'100px',height:'80px'}} src="http://www.totalprosports.com/wp-content/uploads/2013/02/22-carl-edwards-playing-guitar-with-zac-brown-band-athletes-who-were-musicians.jpg"/>
                <img style={{width:'100px',height:'80px'}} src="http://www.totalprosports.com/wp-content/uploads/2013/02/22-carl-edwards-playing-guitar-with-zac-brown-band-athletes-who-were-musicians.jpg"/>
                <img style={{width:'100px',height:'80px'}} src="http://www.totalprosports.com/wp-content/uploads/2013/02/22-carl-edwards-playing-guitar-with-zac-brown-band-athletes-who-were-musicians.jpg"/>
              </div>
          </div>
          <br/>
          
          <div>
            <h4 style={{marginLeft: '15px'}}>Bio:</h4>
              <div style={{marginLeft: '30px', marginRight: '20px'}}>
                professional working fiddle, violin ,vocalist 
Play rhythm guitar as well, extensive touring and recording experience
Music Teacher: teach fiddle/violin, piano and voice, occasionally beginning guitar
credit as a songwriter, song recorded ny a well known national and international aritst on Rounder records
              </div>
          </div>
          <br/>
          <Divider />
          <div>
            <h4 style={{marginLeft: '15px'}}>Experience:</h4>
              <div style={{marginLeft: '30px', marginRight: '20px'}}>
                professional working fiddle, violin ,vocalist 
Play rhythm guitar as well, extensive touring and recording experience
Music Teacher: teach fiddle/violin, piano and voice, occasionally beginning guitar
credit as a songwriter, song recorded ny a well known national and international aritst on Rounder records
              </div>
          </div>
          <br/>
          <Divider />
          <div>
            <h4 style={{marginLeft: '15px'}}>Played With:</h4>
              <div style={{marginLeft: '30px', marginRight: '20px'}}>
                professional working fiddle, violin ,vocalist 
Play rhythm guitar as well, extensive touring and recording experience
Music Teacher: teach fiddle/violin, piano and voice, occasionally beginning guitar
credit as a songwriter, song recorded ny a well known national and international aritst on Rounder records
              </div>
          </div>
          <br/>
          <Divider />
  
 
          <Dialog
            title="Dialog With Actions"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}>
            The actions in this window were passed in as an array of react objects.
          </Dialog>
          
      </div>
    );
  }
}


