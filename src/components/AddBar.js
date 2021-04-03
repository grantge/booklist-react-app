import React from 'react';

const AddBar = () => {
  return (
    <div className="add-container">
      <div className="ui small icon input">
        <input type="text" placeholder="Add Author..." />
      </div>
      <div className="ui small icon input input-last">
        <input type="text" placeholder="Add Book..." />
      </div>
      <button className="tiny ui black button">Submit</button>
    </div>
  );
};

export default AddBar;
