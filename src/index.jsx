import React from 'react';
import ReactDOM from 'react-dom';
// import Faker from 'faker';
import Comment from './components/comment'

const App = () => {
  return (
    <div className="ui container comments">
      <Comment />
      <Comment />
      <Comment />
{/*      <div className="comment">
        <a href="/" className="avatar">
          <img src={Faker.image.avatar()} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            {Faker.name.firstName()}
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00pm</span>
          </div>
          <div className="text">{Faker.hacker.phrase()}</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img src={Faker.image.avatar()} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            {Faker.name.firstName()}
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00pm</span>
          </div>
          <div className="text">{Faker.hacker.phrase()}</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img src={Faker.image.avatar()} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            {Faker.name.firstName()}
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00pm</span>
          </div>
          <div className="text">{Faker.hacker.phrase()}</div>
        </div>
      </div>*/}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
