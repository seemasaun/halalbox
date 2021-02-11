import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CartIcon from '../cart-icon';
import {COLORS} from '../../constants/ColorConstant';
import styles from './style';

export class Header extends Component {
  render() {
    const {
      showLogo,
      showCartIcon,
      title,
      showBackButton,
      onPress,
      goBack,
    } = this.props;
    return (
      <View
        elevation={5}
        style={
          title != null
            ? styles.headerContainer
            : [styles.headerContainer, {justifyContent: 'space-between'}]
        }>
        {showBackButton ? (
          <Icon
            style={styles.backIcon}
            name="arrow-back"
            size={22}
            color={COLORS.Black}
            onPress={goBack}
          />
        ) : null}
        {title != null ? <Text style={styles.title}>{title}</Text> : null}
        {showLogo ? (
          <Image
            style={styles.logo}
            source={require('../../assets/home/logo.jpeg')}
          />
        ) : null}
        {showCartIcon ? <CartIcon onPress={onPress} /> : null}
      </View>
    );
  }
}

export default Header;
