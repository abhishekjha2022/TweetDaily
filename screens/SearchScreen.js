import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const SearchScreen = () => {
  const {goBack} = useNavigation();
  return (
    <TouchableOpacity onPress={() => goBack()}>
      <Text>This is search screen</Text>
    </TouchableOpacity>
  );
};
export default SearchScreen;
