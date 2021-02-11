import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../container/home';
import Cart from '../container/cart';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {header: null},
  },
  Cart: {
    screen: Cart,
    navigationOptions: {header: null},
  },
};
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
