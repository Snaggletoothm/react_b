import React, { Component } from "react";
import './item-add-form.css'


export default class AddItemTemp extends Component {

    render() {
        return (
            <div className="item-add-form">
                <button className="btn btn-outline-secondary"
                    onClick={() => this.props.addItem()}    
                >
                    Add Item
            </button>
            </div>
        );
    }
}