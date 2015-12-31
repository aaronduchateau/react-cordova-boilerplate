import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import customFont from '../style/custom-font.scss';
import auth from '../core/auth';
import * as CredentialsActions from '../actions/CredentialsActions';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

export class Login extends Component {
  static propTypes = {
    route: PropTypes.object,
    credentials: PropTypes.object,
    credentialsActions: PropTypes.object
  };
  constructor(...args) {
    super(...args);
    this.state = {
      isMountedAndCreatedByRouter: false
    };
  }
  componentDidMount() {
    // Chnage 'isMountedAndCreatedByRouter' from false to true
    // only when generated from router for the first time.
    // For animation effect
    if (this.props.route !== undefined) {
      setTimeout(() => this.setState({ isMountedAndCreatedByRouter: true }));
    }
  }
  handleSubmit(e) {
    e.preventDefault();

    const { credentialsActions } = this.props;
    credentialsActions.addCredentials();

    const email = this.refs.email.getValue();
    const password = this.refs.password.getValue();

    auth.login(email, password, (authenticated, hint) => {
      if (authenticated) {
        credentialsActions.addCredentialsSucess();
      } else {
        credentialsActions.addCredentialsFailure(hint);
      }
    });
  }
  render() {
    const { credentials } = this.props;
    const { isMountedAndCreatedByRouter } = this.state;
    const { checkingToken, loggingIn, hint } = credentials;
    const hideLogin = (!isMountedAndCreatedByRouter) || checkingToken || loggingIn;

    return (
      <div style={{ position: 'fixed', left: 0, top: 0, width: '100%', height: '100%', textAlign: 'center', backgroundColor: '#FFFFFF', color: 'black' }}>
        <div style={{ position: 'relative', top: '50%', transform: 'translateY(-50%)' }}>
          <div>
            <h1>MIK BETA</h1>
          </div>
          <div style={{ maxHeight: hideLogin ? '0' : '249px', overflow: 'hidden', transition: 'max-height 0.5s ease-in-out' }}>
            <div style={{ paddingTop: '5px' }}>
              <TextField
                floatingLabelText="email"
                ref="email" />
            </div>
            <div style={{ paddingTop: '5px' }}>
              <TextField
                hintText="Password"
                floatingLabelText="password"
                type="password"
                ref="password" />
              <div style={{ height: '1em' }}>{hint && `Hint: ${hint}`}</div>
            </div>
            <div style={{ paddingTop: '5px' }}>
              <RaisedButton label="Login" onClick={::this.handleSubmit}/>
            </div>
            <br/>
            <br/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({ general: state.general, credentials: state.credentials }), dispatch => ({
  credentialsActions: bindActionCreators(CredentialsActions, dispatch)
}))(Login);
