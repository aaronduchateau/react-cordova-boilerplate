import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/TodoActions';
import * as CredentialsActions from '../actions/CredentialsActions';
import auth from '../core/auth';
import AppHeader from '../components/AppHeader.jsx';
import AppHeaderTwo from '../components/AppHeaderTwo.jsx';
import Calendar from '../components/Calendar.jsx';
import Messages from '../components/Messages.jsx';
import Profile from '../components/Profile.jsx';
import MainSection from '../components/MainSection.jsx';

import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import LeftNav from 'material-ui/lib/left-nav';


import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

const style = {
  marginTop: '15%',
  border: '10px solid transparent',
  boxShadow: '2px 2px 10px 0px',
  borderRadius: '10px'
};

const tabStyles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  backgroundDiv: {
    backgroundColor:'white'
  }
};

export class Home extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    credentialsActions: PropTypes.object.isRequired,
    todoActions: PropTypes.object.isRequired
  };
  constructor(props, context) {
    super(props, context);
    this.state = {
      musicianStatus: "on deck", 
      open: false,
      selectedTab: "profile"};
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  flyNavigate = (loc) => {
    if (loc === 'profile' || loc === 'calendar' || loc === 'messages'){
      this.setState({selectedTab: loc});
    }
  };

  handleSearchToggle = () => this.setState({openSearchDialogue: !this.state.openSearchDialogue});
  
  render() {
    const { todos, todoActions } = this.props;
    var musicianStatus = this.state.musicianStatus;

    return (
      <div style={{backgroundColor: 'white'}}>
        <AppHeader flyNavigate={this.flyNavigate}/>
        <AppHeaderTwo />
        <Tabs value={this.state.selectedTab}>
          <Tab label="Profile" value="profile" onClick={this.flyNavigate.bind(this, 'profile')}>
            <div style={tabStyles.backgroundDiv}>
              <Profile/>
            </div>
          </Tab>
          <Tab label="Calendar" value="calendar" onClick={this.flyNavigate.bind(this, 'calendar')}>
            <div style={tabStyles.backgroundDiv}>
              <Calendar />
            </div>
          </Tab>
          <Tab label="Messages" value="messages" onClick={this.flyNavigate.bind(this, 'messages')}>
            <div style={tabStyles.backgroundDiv}>
              <Messages />
            </div>
          </Tab>
        </Tabs>
      
      </div>
    );
  }
}

export default connect(state => ({ todos: state.todos }), dispatch => ({
  credentialsActions: bindActionCreators(CredentialsActions, dispatch),
  todoActions: bindActionCreators(TodoActions, dispatch)
}))(Home);
