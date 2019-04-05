import React, { Component } from 'react';

/** using component in react */
class Lession3 extends Component {
    constructor() {
        super();
        this.state = {
            data: 
            [
                {
                   "id":1,
                   "name":"Foo",
                   "age":"20"
                },
                {
                   "id":2,
                   "name":"Bar",
                   "age":"30"
                },
                {
                   "id":3,
                   "name":"Baz",
                   "age":"40"
                }
             ]
        }
    }
    render() {
        return (
            <div>
                <Headers />
                <table>
                    <tbody>
                        {
                            this.state.data.map((person,i) => <Content key={i} data={person} />)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
class Headers extends Component {
    render() {
        return (
            <div> This is Headers</div>
        );
    }
}
class Content extends React.Component {
    render() {
        return (
            <div>
                <tr>
                    <td>{this.props.data.id}</td>
                    <td>{this.props.data.name}</td>
                    <td>{this.props.data.age}</td>
                </tr>
            </div>
        );
    }
}
export default Lession3;