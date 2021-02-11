import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 6,
  },
  content: {flexDirection: 'row'},
  image: {
    width: 120,
    height: 80,
  },
  name: {fontWeight: 'bold'},
  quantity: {fontSize: 12},
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    width: width - 190,
  },
  price: {fontSize: 12, fontWeight: 'bold'},
  contentView: {
    width: width - 180,
    marginLeft: 15,
    justifyContent: 'center',
  },
  deleteIcon: {padding: 5},
});
