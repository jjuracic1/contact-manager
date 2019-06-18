import React, { Component } from 'react'

class Test extends Component {
    state = {
        title: '',
        body: ''
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => this.setState({ 
                title: data.title, 
                body: data.body
            }));
        //console.log('componentDidMount');
    }

    // // deprecated!!!
    // componentWillMount() {
    //     console.log('componentWillMount');
    // }

    // componentWillUpdate() {
    //     console.log('componentWillUpdate');
    // }

    // // deprecated!!!
    // componentDidUpdate() {
    //     console.log('componentDidUpdate');
    // }

    // // deprecated!!!
    // componentWillReceiveProps(nextProps, nextState) {
    //     console.log('componentWillReceiveProps');
    // }

    // static getDerivedStateFromProps(nextProps, prevState){
    //     return null;
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState){
    //     console.log('getSnapshotBeforeUpdate');
    // }


    render() {
        const {title, body} = this.state;
        return (
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        )
    }
}

export default Test;
