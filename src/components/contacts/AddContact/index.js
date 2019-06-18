import React, { Component } from 'react';
import {Consumer} from '../../../context';
import FormInputGroup from '../../layout/FormInputGroup';
//import uuid from 'uuid';
import axios from 'axios';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});
    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        //console.log(this.state);
        const {name,email,phone}= this.state;

        // validation
        let errors={};
        if (name === ''){
            errors = {name: 'Name is required'};
        }
        if (email === ''){
            errors = {...errors, email: 'Email is required'};
        }
        if (phone === ''){
            errors = {...errors, phone: 'Phone is required'};
        }
        if (Object.entries(errors).length > 0 ) {
            this.setState({errors});
            //console.log(this.state.errors);
            return;
        }

        const newContact = {
            // id: uuid(),
            name,
            email,
            phone
        };

        const res = await axios.post('https://jsonplaceholder.typicode.com/users/', newContact);
        // .then(response => 
        //     dispatch({type:'ADD_CONTACT', payload: response.data})
        // )
        dispatch({type:'ADD_CONTACT', payload: res.data});

        // reset form
        this.setState({
            name:'', 
            email:'', 
            phone:'',
            errors: {}
        });

        this.props.history.push('/');
    };

    render() {
        const {name,email,phone,errors} = this.state;

        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return (
                        <div className="card mb-3">
                        <div className="card-header">Add Contact</div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                <FormInputGroup label="Name" name="name" placeholder="Enter Name..."        value={name} onChange={this.onChange} error={errors.name} />
                                <FormInputGroup label="Email" name="email" placeholder="Enter Email..."        value={email} onChange={this.onChange} type="email" error={errors.email} />
                                <FormInputGroup label="Phone" name="phone" placeholder="Enter Phone..."        value={phone} onChange={this.onChange} error={errors.phone} />
                                <input type="submit" value="Add Contact" className="btn btn-primary btn-block" />
                            </form>
                        </div>
                    </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default AddContact;
