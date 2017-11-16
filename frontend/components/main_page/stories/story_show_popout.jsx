import React from 'react';
import StoriesShow from './story_show';
import PopOut from '../pop_out';

export default props => {

  const prevSource = props.match.params.prevSource;
  const prevId = props.match.params.prevId ?
    props.match.params.prevId : null;
  const prevURL = prevId ? `${prevSource}/${prevId}` : `${prevSource}`;

  const newProps = {
    component: StoriesShow,
    isOpen: true,
    closePopOut: () => props.history.push(`/i/${prevURL}`),
  };

  return <PopOut {...props} {...newProps}/>;
};
