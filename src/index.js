import React from 'react';
import ReactDOM from 'react-dom';


// const el = <h1>Hello World!!!</h1>

const el = React.createElement(
  'h1',
  null,
  'hello'
);

ReactDOM.render(el, document.getElementById('root'));