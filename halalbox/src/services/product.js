import {REQUEST_URL} from '../constants/APIConstant';
import axios from 'axios';

//Request product list
export function requestProductList(callback) {
  axios
    .get(REQUEST_URL.LIST_URL)
    .then(function (response) {
      if (response.status == 200) {
        return callback(response.data, null);
      } else {
        return callback(null, 'Error occured');
      }
    })
    .catch(function (error) {
      return callback(null, error);
    });
}
