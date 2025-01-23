import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import globalStyles from './assets/styles/globalStyle';
import Userstory from './components/Userstory/Userstory';

const App = () => {
  const userStories = [
    {
      id: 1,
      name: 'vivek',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 2,
      name: 'gaurav',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 3,
      name: 'Yash',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 4,
      name: 'Prajwal',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 5,
      name: 'Pavitra',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 6,
      name: 'Abhijeet',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 7,
      name: 'Dhiraj',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 8,
      name: 'Sarath',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 8,
      name: 'Pallavi',
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];
  return (
    <SafeAreaView>
      <View style={globalStyles.header}>
        <Title title={"Let's explore"} />
        <TouchableOpacity style={globalStyles.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} color={'#898DAE'} size={20} />
          <View style={globalStyles.messageContainer}>
            <Text style={globalStyles.messageNumber}>5</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={globalStyles.userStoryContainer}>
        <FlatList horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={userStories}
          renderItem={({item}) => (
            <Userstory name={item.name} profileImage={item.profileImage} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
