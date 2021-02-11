import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/ColorConstant';

export default StyleSheet.create({
  headerContainer: {
    height: 50,
    backgroundColor: COLORS.White,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {width: 80, height: 50},
  backIcon: {paddingLeft: 10, paddingRight: 10},
  title: {fontSize: 17, fontWeight: 'bold'},
});
