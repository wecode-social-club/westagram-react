import React from 'react';
import Feed from '../../Components/Feed/Feed';
import { feedData } from './data';
import './Main.scss';

function Main() {
  return (
    <div>
      <Feed data={feedData} />
    </div>
  );
}

export default Main;
