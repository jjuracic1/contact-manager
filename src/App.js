import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import About from './components/pages/About';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import NotFound from './components/pages/NotFound';
//import AddContactRef from './components/contacts/AddContactRef';
import Test from './components/test/Test';

import {Provider} from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider>
      <Router  basename="/contact-manager">
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            {/* <Contact name="John Doe" email="jdoe@gmail.com" phone="555-555-5555" />
            <Contact name="Jurica Juračić" email="jjuracic1@gmail.com" phone="666-666-6666" /> */}
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/about" component={About} />
              <Route exact path="/test" component={Test} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
