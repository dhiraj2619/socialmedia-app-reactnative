import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  header: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: 14,
    backgroundColor: '#ffffff',
    borderRadius: 100,
  },
  messageContainer: {
    backgroundColor: '#F35BAC',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 15,
    width: 15,
    borderRadius: 20,
    position: 'absolute',
    right: 5,
    top: 4,
  },
  messageNumber: {
    color: '#ffffff',
    fontSize: 8,
    fontWeight: 700,
    letterSpacing: 0.12,
  },
  userStoryContainer: {
    marginTop: 20,
    marginHorizontal: 28,
  },
});

export default globalStyles;
