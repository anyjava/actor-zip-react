import React, { ReactElement } from 'react';

import { List, NavBar } from 'antd-mobile'

import FeedRepositoryMock from '../repository/FeedRepositoryMock';
import { FeedRepository } from '../repository/FeedRepository';
import Feed from '../model/Feed';

const feedRepository: FeedRepository = new FeedRepositoryMock();

function FeedList(): ReactElement {
  return (
    <div className="feedList">
			<NavBar backArrow={false}  back='한예리'>피드 리스트</NavBar>
      <List>
        {feedRepository.findAllBy().map((feed: Feed) => {
          return <List.Item clickable title={feed.getTitle()} prefix='dfsdfas'/>
        })}
      </List>
    </div>
  );
};

export default FeedList;