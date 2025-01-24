import {StyleSheet} from 'react-native';

const userpostStyle = StyleSheet.create({
  userMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  userContainer: {flexDirection: 'row'},
  user: {justifyContent: 'center', marginLeft: 10, gap: 5},
  usertext: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  locationtext: {color: '#79869F', fontSize: 12},
  userpost: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  userPopulate: {
    color: '#79869F',
    fontSize: 16,
  },
  like: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  postuser: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});

export default userpostStyle;
