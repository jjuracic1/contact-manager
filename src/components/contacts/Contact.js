import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Consumer} from '../../context';
import axios from 'axios';

class Contact extends Component {
    state = {
        showContactInfo: false
    };
    onShowClick = (e) => {
        this.setState({showContactInfo: !this.state.showContactInfo});
    };

    onDeleteClick = async (id, dispatch) => {
        try {
            //console.log('clicked');
            //this.props.deleteClickHandler();
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            //.then(response => dispatch({type: 'DELETE_CONTACT', payload: id})
            //)
        }
        catch(exc){

        }

        dispatch({type: 'DELETE_CONTACT', payload: id});
    };

    render() {
        const {id, name,email,phone} = this.props.contact;
        const {showContactInfo} = this.state;

        return (
            <Consumer>
                {value => { 
                    const {dispatch} = value;

                    return (
                        <div className="card mb-3">
                            <h4 className="card-header">
                                {name} <i onClick={this.onShowClick} 
                                className="fas fa-sort-down"
                                style={{cursor:'pointer'}}
                                ></i>

                                <i className="fas fa-times" 
                                style={{cursor:'pointer', float:'right', color: 'red'}}
                                onClick={this.onDeleteClick.bind(this, id, dispatch)}
                                ></i>
                                <Link to={`/contact/edit/${id}`}>
                                    <i className="fas fa-pencil-alt"
                                    style={{cursor: 'pointer', float: 'right', color:'black', marginRight: '1rem'}} />
                                </Link>
                            </h4>
                            <div className={'card-body ' + (showContactInfo ? 'd-block' : 'd-none')}>
                                <ul className="list-group">
                                    <li className="list-group-item">Email: {email}</li>
                                    <li className="list-group-item">Phone: {phone}</li>
                                </ul>                
                            </div>
                        </div>
                    )}}

            </Consumer>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
    //deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
