import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getState} from '../../redux/store/configureStore';
import index from '../../redux/actions/index';
import Header from '../../components/header';
import CartCard from '../../components/cart-card';
import {STRINGS} from '../../constants/StringConstant';
import styles from './style';

export class Cart extends Component {
  goBack = () => {
    this.props.navigation.goBack();
  };

  removeProductFromCart(product, index) {
    this.props.actions.removeProductFromCart(product, index);
    this.forceUpdate();
  }

  renderCard = (data, index) => {
    return (
      <CartCard
        data={data}
        onPress={() => this.removeProductFromCart(data, index)}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          showBackButton={true}
          title={'Shopping Cart'}
          showLogo={false}
          showCartIcon={false}
          goBack={() => this.goBack()}
        />
        <View style={styles.list}>
          {getState().productReducer.cartProducts.length > 0 ? (
            <FlatList
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={true}
              data={getState().productReducer.cartProducts}
              renderItem={({item, index}) => this.renderCard(item, index)}
              keyExtractor={(item) => item.id}
            />
          ) : (
            <View style={styles.emptyCart}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {STRINGS.CartEmpty}
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(index, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Cart);
