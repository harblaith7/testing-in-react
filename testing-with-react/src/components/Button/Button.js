import React, { Component } from 'react';

class Button extends Component {

    constructor(props){
        super(props)
        this.state = {
            counter: 1
        }
    }

    incrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <button className="Button" onClick={this.incrementCounter} data-testid="button">
                {this.state.counter}
            </button>
        );
    }
}

export default Button;



