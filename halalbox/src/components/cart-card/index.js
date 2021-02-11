import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../constants/ColorConstant';
import styles from './style';

export class CartCard extends Component {
  render() {
    const {data, onPress} = this.props;
    return (
      <View style={styles.container} elevation={2}>
        <View style={styles.content}>
          <Image style={styles.image} source={{uri: `${data.image_link}`}} />

          <View style={styles.contentView}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.quantity}>{data.quantity}</Text>
            <View style={styles.bottomView}>
              <Text style={styles.price}>
                <Icon name="rupee" size={12} color={COLORS.Black} />{' '}
                {data.price}
              </Text>
              <TouchableOpacity style={styles.deleteIcon} onPress={onPress}>
                <MaterialIcon name="delete" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default CartCard;
