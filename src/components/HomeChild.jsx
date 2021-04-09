import React from 'react';

export class HomeChild extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }

        console.log("HomeChild callling");
    }

    componentWillMount() {
        console.log("HomeChild componentWillMount")
    }

    componentDidMount() {
        console.log("HomeChild componentDidMount")
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("HomeChild componentWillUpdate", nextProps, nextState)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("HomeChildcomponentDidUpdate", prevProps, prevProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("HomeChild shouldComponentUpdate");
        return true;
    }

    componentWillReceiveProps(nextProps) {
        console.log("HomeChild componentWillReceiveProps", nextProps);
    }

    componentWillUnmount() {
        console.log("HomeChild componentWillUnmount");
    }

    handleEvent = () => {
        this.setState({ count: 1 });
    }

    render() {
        return <div>
            <button onClick={this.handleEvent}>HomeChild</button>
        </div>
    }

}