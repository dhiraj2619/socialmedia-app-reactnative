import PropTypes from 'prop-types';
import React from 'react';
import {Image, View} from 'react-native';
import userProfileStyle from './Style';

const Userprofileimage = props => {
  return (
    <View style={[userProfileStyle.userImageContainer]}>
      <Image
        source={props.profileImage}
        style={{width: props.imageDimensions, height: props.imageDimensions}}
      />
    </View>
  );
};

Userprofileimage.propTypes = {
  profileImage: PropTypes.any.isRequired,
  imageDimensions: PropTypes.number.isRequired,
};

export default Userprofileimage;
