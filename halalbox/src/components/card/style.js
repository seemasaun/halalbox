import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    width: width / 2,
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
  },
  image: {
    width: width / 2 - 30,
    height: 150,
    borderRadius: 10,
    marginBottom: 5,
  },
  name: {fontWeight: 'bold'},
  quantity: {fontSize: 12},
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  price: {fontSize: 12, fontWeight: 'bold'},
});
