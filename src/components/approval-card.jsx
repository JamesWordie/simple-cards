import React from 'react';

const ApprovalCard = (props) => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
    {/*pass the object from parent into child and access via props.children*/}
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Accept</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  )
};


export default ApprovalCard;