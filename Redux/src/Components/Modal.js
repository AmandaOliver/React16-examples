import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    return this.props.show && (<div className='container'>
        <div className='modal'>
          <button onClick={() => this.props.closeModal()} className='close_button'>Close</button>
        </div>
      </div>)
  }
}
