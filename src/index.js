import React from 'react';
import ReactDOM from 'react-dom';
import faker from'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
//. means it's present in the same folder

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard />
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        content="Nice Post"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00PM"
        content="What a post"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 5:00PM"
        content="Loved it!"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
