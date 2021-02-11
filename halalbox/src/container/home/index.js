import React, {Component} from 'react';
import {View, FlatList, ActivityIndicator, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getState} from '../../redux/store/configureStore';
import index from '../../redux/actions/index';
import Header from '../../components/header';
import Card from '../../components/card';
import {COLORS} from '../../constants/ColorConstant';
import styles from './style';

export class Home extends Component {
  productList = [];
  loader = null;

  componentDidMount() {
    //Fetch list from API
    this.props.actions.getProductList();

    //Set status bar color
    StatusBar.setBarStyle('dark-content', true);
    StatusBar.setBackgroundColor(COLORS.LightGrey);
  }

  showCartDetail = () => {
    this.props.navigation.navigate('Cart');
  };

  addProductToCart = (product) => {
    let cartProduct = getState().productReducer.cartProducts;
    if (cartProduct.length == 0) {
      this.props.actions.addProductToCart(product);
    } else {
      //Check if product is already added to cart
      const found = cartProduct.some((item) => item.id === product.id);
      if (!found) {
        this.props.actions.addProductToCart(product);
      } else {
        alert('Product already added to cart');
      }
    }
  };

  renderCard = (data) => {
    return (
      <Card
        data={data}
        buttonTitle={'ADD'}
        onPress={() => this.addProductToCart(data.item)}
      />
    );
  };

  render() {
    //Check status
    if (this.props.getProductListPending == true) {
      this.loader = (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={COLORS.Black} />
        </View>
      );
    } else if (this.props.getProductListSuccess == true) {
      this.loader = null;
      this.productList = this.props.getProductListResponse;
      this.setState({
        showLoader: false,
      });
      this.props.actions.resetProductList();
    } else if (this.props.getProductListError != null) {
      alert(this.props.getProductListError);
      this.props.actions.resetProductList();
    }

    return (
      <View style={styles.container}>
        <Header
          title={null}
          showBackButton={false}
          showLogo={true}
          showCartIcon={true}
          onPress={() => this.showCartDetail()}
        />
        <View style={styles.list}>
          {this.loader}
          {this.productList.length > 0 ? (
            <FlatList
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={true}
              data={this.productList}
              renderItem={this.renderCard}
              keyExtractor={(item) => item.id}
              numColumns={2}
            />
          ) : null}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getProductListPending: state.productReducer.getProductListPending,
    getProductListSuccess: state.productReducer.getProductListSuccess,
    getProductListError: state.productReducer.getProductListError,
    getProductListResponse: state.productReducer.getProductListResponse,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(index, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
