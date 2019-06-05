import React from 'react';
import './ResultContainer.css';

const ResultContainer = (props) => {

    return (
      <div className="component-display">
          <div className="margin-right">
            {props.value}  
          </div>
      </div>
    );
  
}

export default ResultContainer;

