import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/ColorConstant';

export default StyleSheet.create({
  cartView: {padding: 10},
  icon: {transform: [{rotate: '0deg'}]},
  circle: {
    width: 13,
    height: 13,
    borderRadius: 6,
    backgroundColor: COLORS.CrimsonRed,
    position: 'absolute',
    top: 8,
    right: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    top: 8,
    right: 12,
    position: 'absolute',
    fontSize: 9,
    fontWeight: 'bold',
    color: COLORS.White,
  },
  countView: {position: 'absolute', right: 0},
});
