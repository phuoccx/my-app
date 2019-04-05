import React, { Component } from 'react';

class Lession5 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            header: "This is Header !",
            content: "This is Content"
        }
    }
    render() {
        var styleCm = {
            fontSize: 30,
        }
        return (
            <div>
                <Header dataHead={this.state.header} dataStyle={styleCm} />
                <Content dataContent={this.state.content} />
            </div>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <div style={this.props.dataStyle}>{this.props.dataHead}</div>
        );
    }
}

class Content extends Component {
    render() {
        return (
            <div>{this.props.dataContent}</div>
        );
    }
}
export default Lession5