import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize, verticalScale} from './Scaling';

const globalStyles = StyleSheet.create({
  header: {
    marginLeft: horizontalScale(27),
    marginRight: horizontalScale(17),
    marginTop: verticalScale(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: horizontalScale(14),
    backgroundColor: '#ffffff',
    borderRadius: horizontalScale(100),
  },
  messageContainer: {
    backgroundColor: '#F35BAC',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(15),
    width: horizontalScale(15),
    borderRadius: horizontalScale(20),
    position: 'absolute',
    right: horizontalScale(5),
    top: verticalScale(4),
  },
  messageNumber: {
    color: '#ffffff',
    fontSize: scaleFontSize(8),
    fontWeight: 700,
    letterSpacing: 0.12,
  },
  userStoryContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(28),
  },
  userPostContainer: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(20),
  },
});

export default globalStyles;
