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



import Avatar from 'material-ui/lib/avatar';
import TextField from 'material-ui/lib/text-field';

import IconChat from 'material-ui/lib/svg-icons/communication/chat';
import IconSearch from 'material-ui/lib/svg-icons/action/search';


const iconClass = {float: 'right', marginTop: '3px'};
const Colors = {darkBlack: 'black'}
var searchStyle = {marginLeft: '25px'}
var customContentStyle = {
  width: '350px',
  maxWidth: 'none',
};

export default class Messages extends Component {
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
            floatingLabelText="Search Messages"
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
          <ToolbarGroup firstChild={true} float="left">
            <DropDownMenu value={1}>
              <MenuItem value={1} primaryText="Inbox">
                <ContentInbox style={iconClass}/> 
              </MenuItem>
              <MenuItem value={2} primaryText="Starred">
                <ActionGrade style={iconClass}/> 
              </MenuItem>
              <MenuItem value={3} primaryText="Sent">
                <ContentDrafts style={iconClass}/> 
              </MenuItem>
              <MenuItem value={4} primaryText="Drafts">
                <ContentInbox style={iconClass}/> 
              </MenuItem>
            </DropDownMenu>
          </ToolbarGroup>
          <ToolbarGroup float="right">
           <IconButton  onTouchTap={this.handleOpen}>
            <IconChat />
           </IconButton>
           <IconButton  onClick={::this.handleSearchToggle}>
            <IconSearch />
           </IconButton>

    
          </ToolbarGroup>
        </Toolbar>

        {searchArea}
          <List subheader="Today">
  <ListItem onTouchTap={this.handleOpen}
    leftAvatar={<Avatar src="http://iconshow.me/media/images/Mixed/small-n-flat-icon/png2/128/profile-alt-.png" />}
 
    primaryText="Brendan Lim"
    secondaryText={
      <p>
        <span style={{color: Colors.darkBlack}}>Brunch this weekend?</span><br/>
        I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
      </p>
    }
    secondaryTextLines={2} />
  <Divider inset={true} />
  <ListItem onTouchTap={this.handleOpen}
    leftAvatar={<Avatar src="http://iconshow.me/media/images/Mixed/small-n-flat-icon/png2/128/profile-alt-.png" />}
 
    primaryText="me, Scott, Jennifer"
    secondaryText={
      <p>
        <span style={{color: Colors.darkBlack}}>Summer BBQ</span><br/>
        Wish I could come, but I&apos;m out of town this weekend.
      </p>
    }
    secondaryTextLines={2} />
  <Divider inset={true} />
  <ListItem onTouchTap={this.handleOpen}
    leftAvatar={<Avatar src="http://iconshow.me/media/images/Mixed/small-n-flat-icon/png2/128/profile-alt-.png" />}
  
    primaryText="Grace Ng"
    secondaryText={
      <p>
        <span style={{color: Colors.darkBlack}}>Oui oui</span><br/>
        Do you have any Paris recs? Have you ever been?
      </p>
    }
    secondaryTextLines={2} />
  <Divider inset={true} />
  <ListItem onTouchTap={this.handleOpen}
    leftAvatar={<Avatar src="http://iconshow.me/media/images/Mixed/small-n-flat-icon/png2/128/profile-alt-.png" />}
   
    primaryText="Kerem Suer"
    secondaryText={
      <p>
        <span style={{color: Colors.darkBlack}}>Birthday gift</span><br/>
        Do you have any ideas what we can get Heidi for her birthday? How about a pony?
      </p>
    }
    secondaryTextLines={2} />
  <Divider inset={true} />
  <ListItem
    leftAvatar={<Avatar src="http://iconshow.me/media/images/Mixed/small-n-flat-icon/png2/128/profile-alt-.png" />}
   
    primaryText="Raquel Parrado"
    secondaryText={
      <p>
        <span style={{color: Colors.darkBlack}}>Recipe to try</span><br/>
        We should eat this: grated squash. Corn and tomatillo tacos.
      </p>
    }
    secondaryTextLines={2} />
</List>
<Dialog
  title="Send a Message"
  actions={actions}
  modal={false}
  open={this.state.open}
  contentStyle={customContentStyle}
  onRequestClose={this.handleClose}>
  <AutoComplete
            floatingLabelText="To Recipient"
            dataSource={['Aaron DuChateau', 'Beatrice Johnson', 'Cathy Clark', 'Denis Denixon', 'Ellie Smith', 'Tony Simpleton', 'Zane Gooley', 'Matt Sextant']} />
  <br/>
  <TextField
    hintText="Message Content"
    multiLine={true} />
</Dialog>
          
      </div>
    );
  }
}


