import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import Contact from './Contact';
import {Consumer} from '../../context';


class Contacts extends Component {


    // deleteContact = (id) => {
    //     //console.log(id);
    //     const {contacts} = this.state;
    //     const newContacts = contacts.filter(contact => contact.id !== id);
    //     this.setState({
    //         contacts: newContacts
    //     });
    // };
 
    render() {
        return(
            <Consumer>
            {value => {
                const {contacts} = value;
                return (
                    <React.Fragment>
                        <h1 className="display-4 mb-2">
                            <span className="text-danger">Contact List</span>
                        </h1>
                        {contacts.map(contact => 
                            <Contact key={contact.id} contact={contact} />        
                            //   <Contact key={contact.id} contact={contact} 
                            //     deleteClickHandler={this.deleteContact.bind(this, contact.id)}  />
                        )}
                    </React.Fragment>
            )}}  
            </Consumer>
        )
        // const {contacts} = this.state;
    }
}

export default Contacts;
