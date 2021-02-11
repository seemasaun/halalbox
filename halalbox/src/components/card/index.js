import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../button';
import {COLORS} from '../../constants/ColorConstant';
import styles from './style';

export class Card extends Component {
  render() {
    const {data, buttonTitle, onPress} = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: `${data.item.image_link}`}} />
        <Text style={styles.name}>{data.item.name}</Text>
        <Text style={styles.quantity}>{data.item.quantity}</Text>
        <View style={styles.bottomView}>
          <Text style={styles.price}>
            <Icon name="rupee" size={12} color={COLORS.Black} />{' '}
            {data.item.price}
          </Text>
          <Button title={buttonTitle} onPress={onPress} />
        </View>
      </View>
    );
  }
}

export default Card;
