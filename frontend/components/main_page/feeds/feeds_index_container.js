import { connect } from 'react-redux';
import React from 'react';
import FeedsIndex from './feeds_index';
import { subscribedFeeds } from '../../../reducers/selectors';
import { fetchAllSubscriptions } from '../../../actions/subscription_actions';

const mapStateToProps = state => ({
  feeds: Object.values(state.entities.feeds.byId)
});

const mapDispatchToProps = dispatch => ({
  fetchAllSubscriptions: () => dispatch(fetchAllSubscriptions())
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedsIndex);