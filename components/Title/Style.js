import {StyleSheet} from 'react-native';
import { scaleFontSize } from '../../assets/styles/Scaling';

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: 'Inter',
    fontWeight: 700,
    fontSize: scaleFontSize(24),
    textTransform: 'capitalize',
  },
});

export default style;
