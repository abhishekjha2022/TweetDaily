import {View, Text, FlatList} from 'react-native';
import React from 'react';
import TweetDetailScreen from '../screens/TweetDetailScreen';
import TweetHeader from './TweetHeader';

const CommentsList = ({commentsBy}) => {
  return (
    <FlatList
      data={commentsBy}
      keyExtractor={commentsBy => commentsBy.userId}
      renderItem={({item}) => <TweetHeader item={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CommentsList;
