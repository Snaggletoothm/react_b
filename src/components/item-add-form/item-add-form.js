import React, { Component } from "react";
import './item-add-form.css'


export default class AddItemTemp extends Component {
    
    state = { label: '' };

    onLabelChange = e => {
        this.setState({ label: e.target.value });
    };

    onSubmitData = e => {
        const { label } = this.state;
        e.preventDefault();
        this.props.addItem(label);
        this.setState({ label: '' });
    };

    render() {
        return (
            <form className="item-add-form d-flex"
                onSubmit={this.onSubmitData}
            >
                <input 
                    type='text' 
                    className='form-control' 
                    placeholder='Add new item'
                    onChange={this.onLabelChange}    
                    value={this.state.label}
                />

                <button className="btn btn-outline-secondary"
                    // onClick={() => this.props.addItem()}    
                >
                    Add
                </button>
            </form>
        );
    }
}