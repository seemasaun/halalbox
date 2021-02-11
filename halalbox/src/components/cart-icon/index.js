import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import index from '../../redux/actions/index';
import {COLORS} from '../../constants/ColorConstant';
import styles from './style';

export class CartIcon extends Component {
  render() {
    const {onPress} = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.cartView}>
          <Icon
            style={styles.icon}
            name="shopping-cart"
            size={22}
            color={COLORS.Black}
          />
        </View>
        {this.props.cartProductCount > 0 ? (
          <View style={styles.countView}>
            <View style={styles.circle} />
            <Text style={styles.count}>{this.props.cartProductCount}</Text>
          </View>
        ) : null}
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartProductCount: state.productReducer.cartProductCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(index, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
