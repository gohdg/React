import React, { Component } from 'react'

export class Greet extends Component {
    render() {
        return (
            <div>
                {this.props.msg}
            </div>
        )
    }
}

export default Greet
