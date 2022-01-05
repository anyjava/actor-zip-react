import React, { ReactElement, useEffect, useState } from 'react';

import { List, NavBar } from 'antd-mobile'

import { FeedRepository } from '../repository/FeedRepository';
import Feed from '../model/Feed';
import { FeedApiRepository } from '../repository/FeedApiRepository';

const feedRepository: FeedRepository = new FeedApiRepository();

function FeedList(): ReactElement {
  const [feeds, setFeeds] = useState([] as Feed[]);

  useEffect(() => {
    async function get() {
      const result = await feedRepository.findAllBy();
      setFeeds(result);
    }
    get();
  })

  return (
    <div className="feedList">
			<NavBar backArrow={false}  back='한예리'>피드 리스트</NavBar>
      <List key={1}>
        { feeds.map((feed: Feed) => {
          return <List.Item key={feed.getId()} clickable title={feed.getTitle()} prefix='.' onClick={() =>  {window.location.href=feed.getUrl() }} />
        })}
      </List>
    </div>
  );
};

export default FeedList;