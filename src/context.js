import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        case 'UPDATE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.map(contact => contact.id === action.payload.id ? (contact = action.payload) : contact)
            };
        default:
         return state;
    }
};

export class Provider extends Component {
    state = {
        contacts: [
            // {
            //     id: 1,
            //     name: 'John Doe',
            //     email: 'jdoe@gmail.com',
            //     phone: '555-555-5555'
            // },
            // {
            //     id: 2,
            //     name: 'Jurica Juračić',
            //     email: 'jjuracic1@gmail.com',
            //     phone: '666-666-6666'
            // },
            // {
            //     id: 3,
            //     name: 'Karen Walker',
            //     email: 'kwaker@gmail.com',
            //     phone: '777-777-7777'
            // }
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    };

    async componentDidMount() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        //         .then(response => this.setState({
        //    contacts: response.data
        //}));
        this.setState({contacts: res.data});
    }

    render() {
        return (
            <Context.Provider value={this.state}>
            {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;

