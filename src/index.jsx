import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import Comment from './components/comment'
import ApprovalCard from './components/approval-card'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <Comment
          author="Sam"
          time="Today at 4:40pm"
          post="Great post!"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
    {/*by setting up as above you can pass the object of the comment into the approval card*/}
      <ApprovalCard>
        <Comment
          author="Alex"
          time="Today at 4:50pm"
          post="Needs work!"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author="Jane"
          time="Today at 6:40pm"
          post="Awesome!"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
