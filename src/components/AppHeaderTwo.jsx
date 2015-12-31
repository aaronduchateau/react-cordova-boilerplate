import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/TodoActions';
import * as CredentialsActions from '../actions/CredentialsActions';
import auth from '../core/auth';

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
    marginTop: '70px'
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

export default class AppHeaderTwo extends Component {
  

  render() {
    return (
      <div style={backgroundImageStyles}>
          <div style={profileStyles}>
          </div>
          <div style={titleStyles}>
            <span style={topTitleStyle}>Zack Wolfe</span><br/>
            <span style={lowerTitleStyle}>Singer / Guitar Player</span>
          </div>
      </div>
    );
  }
}

