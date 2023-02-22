import React from 'react';
import {FlatList, View} from 'react-native';
import SingleTweet from './SingleTweet';

const TweetContainer = ({item}) => {
  const {profileImage, name, userName, myTweets} = item;
  return (
    <FlatList
      data={myTweets}
      keyExtractor={myTweets => myTweets.tweetId}
      renderItem={({item}) => (
        <SingleTweet
          item={item}
          profileImage={profileImage}
          name={name}
          userName={userName}
        />
      )}
    />
  );
};

export default TweetContainer;
