import React from 'react';
import {Route} from 'react-router-dom'

const Smurf = props => {
  return (
    <Route path={`/smurf/:${props.id}`}>
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
    </Route>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

