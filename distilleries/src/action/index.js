import Axios from "axios";

export const FETCH_DISTILLERIES_START = 'FETCH_DISTILLERIES_START';
export const FETCH_DISTILLERIES_SUCCESS = 'FETCH_DISTILLERIES_SUCCESS'
export const FETCH_DISTILLERIES_FAILURE = 'FETCH_DISTILLERIES_FAILURE'

export const getDistilleries = () => dispatch => {
  dispatch({type: FETCH_DISTILLERIES_START});
  Axios.get('https://api.openbrewerydb.org/breweries?by_city=Saint+Louis&by_state=Missouri')
    .then( res => {
      console.log(res);
      dispatch({type: FETCH_DISTILLERIES_SUCCESS, payload: res.data })
    })
    .catch( err => {
      dispatch({type: FETCH_DISTILLERIES_FAILURE, payload: err})
    })  
} 