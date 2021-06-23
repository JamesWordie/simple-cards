import React from 'react';
import Faker from 'faker';

const Comment = () => {
  return (
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
  );
};

export default Comment;
