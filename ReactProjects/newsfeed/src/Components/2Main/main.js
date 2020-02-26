import React from 'react';
import './main.css';

import TopStory from './1TopStory/topStory';

import News from './2News/news';

import Videos from './3Videos/videos';

function main() {
  return (
    <div className="main">
        <TopStory />
        <News />
        <Videos />
    </div>
  );
}

export default main;