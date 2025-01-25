import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize, verticalScale} from '../../assets/styles/Scaling';

const userpostStyle = StyleSheet.create({
  userMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: verticalScale(30),
  },
  userContainer: {flexDirection: 'row'},
  user: {justifyContent: 'center', marginLeft: horizontalScale(10), gap: 5},
  usertext: {
    fontSize: scaleFontSize(16),
    color: '#000000',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  locationtext: {color: '#79869F', fontSize: scaleFontSize(12)},
  userpost: {
    alignItems: 'center',
    marginTop: verticalScale(20),
    marginBottom: verticalScale(10),
  },
  userPopulate: {
    color: '#79869F',
    fontSize: scaleFontSize(16),
  },
  like: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  postuser: {
    marginHorizontal: horizontalScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});

export default userpostStyle;
