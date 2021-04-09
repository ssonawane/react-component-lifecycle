import React from 'react';
import { HomeChild } from './HomeChild'

export class Home extends React.Component {

    constructor() {
        super();

        this.state = {
            count: 0
        }

        console.log("callling");
    }

    componentWillMount() {
        console.log("componentWillMount")
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate", nextProps, nextState)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate", prevProps, prevProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return true;
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps", nextProps);
    }

    handleEvent = () => {
        this.setState({ count: 1 });
    }

    render() {

        if (true) {
            return <div>
                <button onClick={this.handleEvent}>Home</button>
                <HomeChild />
            </div>
        } else {
            return <h1>Child is removed</h1>
        }


    }
}