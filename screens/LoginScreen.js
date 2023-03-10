import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';

const LoginScreen = () => {
  const {navigate} = useNavigation();
  return (
    <ImageBackground
      source={require('../assets/authbg.jpeg')}
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#fff'}}>
      <View style={{padding: 10}}>
        <Text style={{color: '#000'}}>Welcome</Text>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: '#000'}}>
          Sign In
        </Text>
      </View>
      <View style={{padding: 30}}>
        <TextInput
          placeholder="Email"
          style={{
            borderBottomWidth: 1,
            height: 40,
            marginBottom: 20,
            color: 'darkgrey',
          }}
        />
        <TextInput
          placeholder="Password"
          style={{borderBottomWidth: 1, height: 40, color: 'darkgrey'}}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            padding: 10,
            marginTop: 40,
            borderRadius: 20,
          }}>
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 17,
            }}>
            LOG IN
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginTop: '20%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 17, marginRight: 5, color: '#000'}}>
            Prefer Login with?
          </Text>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              borderWidth: 1,
              borderRadius: 20,
              borderBottomColor: 'orange',
              borderRightColor: 'green',
              borderLeftColor: 'blue',
              borderTopColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/googleIcon.png')}
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginTop: '0%',
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 17, color: '#000'}}>Don't Have a Account?</Text>
        <TouchableOpacity
          style={{marginLeft: 10}}
          onPress={() => navigate('Register')}>
          <Text style={{color: 'blue', fontSize: 17, color: 'blue'}}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default LoginScreen;
