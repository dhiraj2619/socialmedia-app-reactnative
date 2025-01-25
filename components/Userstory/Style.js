import {StyleSheet} from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/Scaling';

const userstory = StyleSheet.create({
  storyContainer: {
    marginRight: horizontalScale(20),
  },
  name: {
    fontWeight: 600,
    fontSize: scaleFontSize(16),
    color: '#22150',
    marginTop: verticalScale(8),
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});

export default userstory;
