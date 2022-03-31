import React, { Component } from 'react';


export default class ItemStatusFilter extends Component {

  predicateDone = data => data.filter(each => each.done);
  predicateActive = data => data.filter(each => !each.done);

  onToggleAllStatus = () => {
    this.props.onToggleStatus('all');
  };

  onToggleActiveStatus = () => {
    this.props.onToggleStatus('active');
  };

  onToggleDoneStatus = () => {
    this.props.onToggleStatus('done');
  };


  render() {
    return (
      <div className="btn-group">
        <button type="button"
                className="btn btn-info"
                onClick={this.onToggleAllStatus}        
        >
          All
        </button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick={this.onToggleActiveStatus}        
        >Active</button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick={this.onToggleDoneStatus}        
        >Done</button>
      </div>
    );
  }
} 
