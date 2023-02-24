import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const TweetIcon = () => {
  return (
    <TouchableOpacity
      style={{
        height: 50,
        width: 50,
        backgroundColor: '#1DA1F2',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        top:-80,
        display:'flex',
        marginLeft:'auto',
        marginRight:20,
        borderRadius:25,
      }}>
      <Text style={{fontSize:30, color:'#fff', textAlign:'center', top:-5, fontWeight:'bold'}}>+</Text>
    </TouchableOpacity>
  );
};
export default TweetIcon;