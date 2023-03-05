import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import {data} from '../assets/data';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DrawerContent = props => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '5%',
        marginBottom: '5%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          source={{uri: data[0].profileImage}}
          style={{height: 40, width: 40, borderRadius: 20}}
        />
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="dots-vertical-circle-outline"
            size={20}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={{marginBottom: 20}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
          {data[0].name}
        </Text>
        <Text style={{color: 'darkgrey'}}>{data[0].userName}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Text style={{marginRight: 5, color: '#000'}}>
            {data[0].FollowedByMe.length}
          </Text>
          <Text style={{color: 'darkgrey'}}>Following</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 20, flexDirection: 'row'}}>
          <Text style={{marginRight: 5, color: '#000'}}>
            {data[0].myFollowers.length}
          </Text>
          <Text style={{color: 'darkgrey'}}>Followers</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: 0.3,
          backgroundColor: 'lightgrey',
          marginTop: 10,
          marginVertical: 20,
        }}></View>
      <View style={{padding: 20}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 25,
          }}>
          <AntDesign name="user" size={20} color="black" />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 15,
              color: '#000',
            }}>
            Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 25,
          }}>
          <MaterialIcons name="topic" size={20} color="black" />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 15,
              color: '#000',
            }}>
            Topics
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 25,
          }}>
          <MaterialIcons name="bookmarks" size={20} color="black" />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 15,
              color: '#000',
            }}>
            Bookmarks
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 25,
          }}>
          <MaterialCommunityIcons
            name="notebook-outline"
            size={20}
            color="black"
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 15,
              color: '#000',
            }}>
            Lists
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 25,
          }}>
          <MaterialCommunityIcons
            name="account-heart-outline"
            size={20}
            color="black"
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 15,
              color: '#000',
            }}>
            TweetDaily Circle
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: 0.3,
          backgroundColor: 'lightgrey',
          marginTop: 10,
          marginVertical: 40,
        }}></View>
      <View style={{}}>
        <TouchableOpacity style={{marginBottom: 20}}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: 'grey'}}>
            Connect With Developer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginBottom: 20}}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: 'grey'}}>
            Github Link of this App
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginBottom: 20}}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: 'grey'}}>
            Have a look to backend code
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 'auto'}}>
        <Text style={{color: '#000'}}>Developed with ❤️ by Abhishek Jha</Text>
      </View>
    </SafeAreaView>
  );
};

export default DrawerContent;
