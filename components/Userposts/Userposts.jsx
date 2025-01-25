import PropTypes from 'prop-types';
import React from 'react';
import {Image, Text, View} from 'react-native';
import Userprofileimage from '../Userprofileimage/Userprofileimage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import userpostStyle from './Style';
import {faBookmark, faComment, faHeart} from '@fortawesome/free-regular-svg-icons';
import { horizontalScale, scaleFontSize } from '../../assets/styles/Scaling';

const Userposts = props => {
  return (
    <View>
      <View style={userpostStyle.userMainContainer}>
        <View style={userpostStyle.userContainer}>
          <Userprofileimage
            profileImage={props.profileImage}
            imageDimensions={horizontalScale(48)}
          />
          <View style={userpostStyle.user}>
            <Text style={userpostStyle.usertext}>
              {props.firstname}
              {props.lastname}
            </Text>
            {props.location && (
              <Text style={userpostStyle.locationtext}>{props.location}</Text>
            )}
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} color={'#79869F'} />
      </View>
      <View style={userpostStyle.userpost}>
        <Image source={props.image} />
      </View>
      <View style={userpostStyle.postuser}>
        <View style={userpostStyle.like}>
          <FontAwesomeIcon icon={faHeart} size={scaleFontSize(24)} color={'#ccc'} />
          <Text style={userpostStyle.userPopulate}>{props.likes}</Text>
        </View>
        <View style={userpostStyle.like}>
          <FontAwesomeIcon icon={faComment} size={scaleFontSize(24)} color={'#ccc'} />
          <Text style={userpostStyle.userPopulate}>{props.comments}</Text>
        </View>
        <View style={userpostStyle.like}>
          <FontAwesomeIcon icon={faBookmark} size={scaleFontSize(24)} color={'#ccc'} />
          <Text style={userpostStyle.userPopulate}>{props.bookMarks}</Text>
        </View>
      </View>
    </View>
  );
};
Userposts.propTypes = {
  profileImage: PropTypes.any.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookMarks: PropTypes.number.isRequired,
};

export default Userposts;
