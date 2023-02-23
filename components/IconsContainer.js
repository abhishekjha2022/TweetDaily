import React, {useContext} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import ColorThemeContext from '../app/context/ColorThemeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const IconsContainer = ({
  iconName,
  iconSize,
  textStyle,
  iconStyle,
  textName,
}) => {
  const {isDarkEnabled} = useContext(ColorThemeContext);
  return (
    <TouchableOpacity style={{flexDirection: 'row'}}>
      <Icon
        name={iconName}
        size={iconSize}
        style={[{color: isDarkEnabled ? 'darkgrey' : 'darkgrey'}, iconStyle]}
      />
      {textName && <Text style={textStyle}>{textName}</Text>}
    </TouchableOpacity>
  );
};

export default IconsContainer;
