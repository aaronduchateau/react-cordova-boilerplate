import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/TodoActions';
import * as CredentialsActions from '../actions/CredentialsActions';
import auth from '../core/auth';

import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import LeftNav from 'material-ui/lib/left-nav';

export class AppHeader extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    credentialsActions: PropTypes.object.isRequired,
    todoActions: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {musicianStatus:"on deck", open: false};
  }
  
  handleLogout() {
    auth.logout();
    this.props.credentialsActions.clearCredentials();
  };
  
  handleChange(e, value){
    this.setState({musicianStatus: value.props.primaryText});
  };
  
  handleToggle = () => this.setState({open: !this.state.open});
 
  render() {
    const { todos, todoActions } = this.props;
    var musicianStatus = this.state.musicianStatus;
    return (
      <div>
         <AppBar
          title={musicianStatus}
          titleStyle={{textAlign: 'right'}}
          onLeftIconButtonTouchTap={::this.handleToggle}
          iconElementRight={
            <IconMenu
              onItemTouchTap={::this.handleChange}
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="on deck" />
              <MenuItem primaryText="booked" />
              <MenuItem primaryText="unavailable" />
            </IconMenu>
          }
        />
        <LeftNav open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem onClick={::this.handleLogout}>logout</MenuItem>
        </LeftNav>
      </div>
    );
  }
}

export default connect(state => ({ todos: state.todos }), dispatch => ({
  credentialsActions: bindActionCreators(CredentialsActions, dispatch),
  todoActions: bindActionCreators(TodoActions, dispatch)
}))(AppHeader);
