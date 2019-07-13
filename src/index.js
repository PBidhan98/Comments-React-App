import React from 'react';
import ReactDOM from 'react-dom';
import faker from'faker';
import CommentDetail from './CommentDetail';
//. means it's present in the same folder

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
