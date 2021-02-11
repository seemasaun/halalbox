import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/ColorConstant';

export default StyleSheet.create({
  buttonView: {
    padding: 3,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: COLORS.CrimsonRed,
    borderWidth: 1,
    borderRadius: 5,
  },
  title: {fontWeight: 'bold', color: COLORS.CrimsonRed},
});
