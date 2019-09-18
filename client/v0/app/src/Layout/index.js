import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Menu from '../components/Menu';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';
// import MenuItem from '../components/MenuItem';
// import Main from '../pages/Main';
import Contacts from '../pages/Contacts';
// import Contact from '../pages/Contact';
import Footer from '../components/Footer';

import './Layout.css';



export default class Layout extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <Menu />
        <main class="main">
          <Switch>
            <Route exact path={["/", "/login"]} component={LoginForm}/>
            <Route exact path="/contacts" component={Contacts}/>
            <Route exact path="/registration" component={RegisterForm}/>
          </Switch>
        </main>
        <Footer />
        {/* <div className="container">
          <div className="row">
            <div className="col-12">
              <Switch>
                <Route exact path="/" component={Main}/>                
                <Route path="/contact/:contactId" component={Contact}/>
              </Switch>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}