import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './style';

export class Button extends Component {
  render() {
    const {title, onPress} = this.props;
    return (
      <TouchableOpacity style={styles.buttonView} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
