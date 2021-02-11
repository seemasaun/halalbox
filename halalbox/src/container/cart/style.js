import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {height: height - 80},
  list: {flex: 1},
  emptyCart: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
