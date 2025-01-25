import {StyleSheet} from 'react-native';
import { horizontalScale } from '../../assets/styles/Scaling';

const userProfileStyle = StyleSheet.create({
  userImageContainer: {
    borderColor: '#F35BAC',
    borderWidth: 1,
    padding: horizontalScale(4),
    borderRadius: 100,
  },
});

export default userProfileStyle;
