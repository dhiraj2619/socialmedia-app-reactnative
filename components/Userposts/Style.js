import {StyleSheet} from 'react-native';

const userpostStyle = StyleSheet.create({
  userMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userContainer: {flexDirection: 'row'},
  user: {justifyContent: 'center', marginLeft: 10, gap: 5},
  usertext: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  locationtext: {color: '#79869F',fontSize:12},
});

export default userpostStyle;
