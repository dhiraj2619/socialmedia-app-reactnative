import PropTypes from 'prop-types';
import React from 'react';
import { Image, View } from 'react-native';
import userstory from '../Userstory/Style';

const Userprofileimage = props => {
  return (
    <View style={userstory.userImageContainer}>
      <Image source={props.profileImage} />
    </View>
  );
};

Userprofileimage.propTypes = {
  profileImage: PropTypes.any.isRequired,
};

export default Userprofileimage;
