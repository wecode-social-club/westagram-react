import React from 'react';
import './UserInfo.scss';

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <img
        alt="profile"
        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/140310863_231997785073932_269675160654457255_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=6y-ttLrILKcAX-wCFAf&edm=ABfd0MgBAAAA&ccb=7-4&oh=f415921bc7e7a07950b579b567eb9d80&oe=60ADCDB8&_nc_sid=7bff83"
      />
      <span>{props.userName}</span>
    </div>
  );
}

export default UserInfo;
