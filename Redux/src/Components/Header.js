import React, {Component} from 'react'
import Button from './Button'
import ErrorButton from './ErrorButton'
import Modal from './Modal';
export default class Header extends Component {
    state = {
        showModal: false
    }
    toggleModal() {
        const { showModal } = this.state;
        this.setState({showModal: !showModal});
    }
    render() {
        const { children } = this.props;
        return (
            <header className='header'>
                <span className='title'>
                    {children}
                </span>
                <div>
                    <button className='modal_button' onClick={() => this.toggleModal()}>Show modal</button>
                    <Modal show={this.state.showModal} closeModal={this.toggleModal}/>
                    <ErrorButton />
                    {/* We dont need to pass down the logged property needed by Button as Context API stores it. */}
                    <Button />
                </div>
            </header>
        )
    }
}
