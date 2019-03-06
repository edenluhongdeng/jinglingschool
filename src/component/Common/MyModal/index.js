import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.less'

export default class MyModal extends Component {
    constructor(props) {
        super(props);
        this.container = document.createElement('div');
        document.body.appendChild(this.container);
    }
    componentWillUnmount() {
        document.body.removeChild(this.container);
    }
    render() {
        const { w, h }  = this.props
        return ReactDOM.createPortal(
            <div className='myModal' style={{width:`${w}rem`,height:`${h}rem`}}>
                <span className='myModal-close' onClick={this.props.onClose}>&times;</span>
                {this.props.children}
            </div>,
            this.container
        )
    }
}