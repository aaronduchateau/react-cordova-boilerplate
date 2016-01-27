import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/TodoActions';
import * as CredentialsActions from '../actions/CredentialsActions';
import auth from '../core/auth';

import AutoComplete from 'material-ui/lib/auto-complete.js';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

  const backgroundImageStyles = {
    //backgroundImage: 'url(http://cdn.bleedingcool.net/wp-content/uploads/2014/03/rockband2_hero.jpg)',
    backgroundImage: 'url(http://c85c7a.medialib.glogster.com/noname707/media/3f/3f13660d7da47ffbf303417cd188bdcebe42a8f7/sadlers-wells-audience.jpg)',
    width: '100%',
    height: '130px',
    backgroundSize: 'cover'
  };

  const profileStyles = {
    width: '120px',
    height: '120px',
    backgroundImage: 'url(http://morningsideschoolofmusic.co.uk/wp-content/uploads/2015/07/blues-music.jpg)',
    backgroundSize: 'cover',
    float: 'left',
    marginLeft: '20px',
    marginTop: '0px'
  };

  const titleStyles = {
    width: '190px', 
    float: 'left',
    marginLeft: '20px',
    marginTop: '42px'
  };

  const topTitleStyle = {
    fontSize: '24px',
    fontWeight: '400',
    color: '#ffffff'
  };

  const lowerTitleStyle = {
    fontSize: '14px',
    fontWeight: '400',
    color: '#ffffff'
  };

  const customContentStyle = {
    width: '350px',
    maxWidth: 'none',
  };



export default class AppHeaderTwo extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  



  render() {

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
      <div style={backgroundImageStyles}>
          <div style={profileStyles}>
          </div>
          <div style={titleStyles}>
            <span style={topTitleStyle}>Zack Wolfe</span><br/>
            <span style={lowerTitleStyle}>Singer / Guitar Player</span>
            <RaisedButton label="Leave a tip" primary={true} onTouchTap={this.handleOpen}/>
          </div>
          <Dialog
            title="Leave a tip"
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
              hintText="$5.00"/>
            <br/>
            <TextField
              hintText="Message Content"
              multiLine={true} />
          </Dialog>
      </div>
    );
  }
}

