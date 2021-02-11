import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {flex: 1},
  list: {
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
