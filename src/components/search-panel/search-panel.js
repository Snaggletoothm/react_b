import React, { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {

  onSearchInputChange = e => {
    this.props.onFilterItems(e.target.value);
  };

  render() {
    return (
      <input type="text"
                className="form-control search-input"
                onChange={this.onSearchInputChange}
                placeholder="type to search" 
      />
    );
  }
};

export default SearchPanel;
