import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import globalStyles from './assets/styles/globalStyle';
import Userstory from './components/Userstory/Userstory';
import Userposts from './components/Userposts/Userposts';

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

  const userPosts = [
    {
      id: 1,
      firstname: 'keshav',
      lastname: 'maharaj',
      location: 'South Africa',
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      likes: 1200,
      comments: 5,
      bookMarks: 10,
    },
    {
      id: 2,
      firstname: 'akshay',
      lastname: 'kumar',
      location: 'Mumbai',
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      likes: 200,
      comments: 1,
      bookMarks: 1,
    },
    {
      id: 3,
      firstname: 'Kartik',
      lastname: 'Aaryan',
      location: 'Mumbai',
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      likes: 5000,
      comments: 51,
      bookMarks: 70,
    },
    {
      id: 4,
      firstname: 'Darshan',
      lastname: 'rawal',
      location: 'Pune',
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      likes: 200,
      comments: 5,
      bookMarks: 70,
    },
    {
      id: 5,
      firstname: 'Neha',
      lastname: 'kakkar',
      location: 'Punjab',
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
      likes: 500,
      comments: 11,
      bookMarks: 10,
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView>
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
          <FlatList
            onEndReachedThreshold={0.5}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={userStories}
            renderItem={({item}) => (
              <Userstory name={item.name} profileImage={item.profileImage} />
            )}
          />
        </View>
        <View style={globalStyles.userPostContainer}>
          <FlatList
            data={userPosts}
            renderItem={({item}) => (
              <Userposts
                profileImage={item.profileImage}
                firstname={item.firstname}
                lastname={item.lastname}
                likes={item.likes}
                comments={item.comments}
                image={item.image}
                location={item.location}
                bookMarks={item.bookMarks}
              />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
