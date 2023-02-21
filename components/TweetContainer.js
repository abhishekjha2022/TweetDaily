import React from 'react';
import {Text, View} from 'react-native';

const TweetContainer = ({item}) => {
  console.log(item);
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
};

export default TweetContainer;
