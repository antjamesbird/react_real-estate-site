import React, { Component } from 'react';
import Capture from './capture/capture';
import ListingsManager from './listingsManager/listingsManager';
import adminLogo from './settings.svg';
import base from '../base';
import './admin.scss';

class Admin extends Component {

  componentWillMount() {
     base.auth().onAuthStateChanged(fireBaseUser => {
      if(fireBaseUser) {
        if(!this.props.authenticationStatus) {
          this.props.updateAuthState(true);
        }
      } else {
        if(this.props.authenticationStatus) {
          this.props.updateAuthState(false);
        }
      }
    });
  }

  handleSignOut(e) {
    e.preventDefault();
    base.auth().signOut();
  }

  handleLogin(e, email, password) {
    e.preventDefault();
    base.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      console.log({
        errorCode:error.code,
        errorMessage:error.message
      });
    });
  }

  render() {
    this.admin = <main className="noBorderTop">
                    <div className="admin-panel-header">
                      <img src={adminLogo} alt="Admin Logo"/>
                      <h1>Admin Panel</h1>
                      <a href="#" className='signOut' onClick={(e) => this.handleSignOut(e)}>LOGOUT</a>
                    </div>
                    <div className="container">
                      <div className="row">
                        <Capture addProperty={this.props.addProperty} />
                        <ListingsManager deleteProperty={this.props.deleteProperty} updateProperty={this.props.updateProperty} rent={this.props.rent} sale={this.props.sale} />
                      </div>
                    </div>
                  </main>
    this.login = <main className="noBorderTop">
                  <div className="admin-panel-header">
                    <img src={adminLogo} alt="Admin Logo"/>
                    <h1>ADMIN PANEL</h1>
                  </div>
                  <div className="container login-form">
                    <div className="row">
                      <div className="col-sm-12 col-md-8 offset-md-2">
                        <form onSubmit={(e) => this.handleLogin(e, this.email.value, this.password.value)}>
                          <div className="form-group">
                            <label className="control-label" htmlFor="name">Email:</label>
                            <div>
                              <input ref={(input) => this.email = input} className="form-control" required pattern="^([a-zA-Z0-9]+[a-zA-Z0-9_\-\.]*)@(([a-zA-Z0-9]+[a-zA-Z0-9-]+\.)|([a-zA-Z0-9]+\.))+([a-zA-Z]{2,10})$" id="email" name="email" placeholder="Enter Your Email Address" type="email" />
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label" htmlFor="password">Password:</label>
                            <div>
                              <input ref={(input) => this.password = input} className="form-control" required name="password" id="password" placeholder="Enter your password" type="password" />
                            </div>
                          </div>
                          <button className="btn btn-primary" type="submit">Login</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </main>

    return this.props.authenticationStatus ? this.admin : this.login
  }
}

export default Admin;