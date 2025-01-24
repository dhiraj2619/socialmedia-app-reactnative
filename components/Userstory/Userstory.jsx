import PropTypes from 'prop-types';
import React from 'react';
import {Text, View} from 'react-native';
import userstory from './Style';
import Userprofileimage from '../Userprofileimage/Userprofileimage';

const Userstory = props => {
  return (
    <View style={userstory.storyContainer}>
       <Userprofileimage profileImage={props.profileImage} imageDimensions={65}/>
      <Text style={userstory.name}>{props.name}</Text>
    </View>
  );
};

Userstory.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Userstory;
