import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
//. means it's present in the same folder

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam"/>
      <CommentDetail author="Alex"/>
      <CommentDetail author="Jane"/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
