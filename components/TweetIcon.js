import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const TweetIcon = ({onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        backgroundColor: '#1DA1F2',
        padding: 10,
        top: -20,
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 20,
        borderRadius: 25,
      }}
      onPress={onPress}>
      <Text
        style={{
          fontSize: 30,
          color: '#fff',
          bottom: '17%',
          fontWeight: 'bold',
        }}>
        +
      </Text>
    </TouchableOpacity>
  );
};
export default TweetIcon;
