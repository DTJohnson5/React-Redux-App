import {FETCH_DISTILLERIES_START, FETCH_DISTILLERIES_SUCCESS, FETCH_DISTILLERIES_FAILURE} from '../action/index'

const initialState = {
  breweries: [],
  isFetching: false,
  error: ''
}

const distilleryReducer = (state=initialState, action) => {
  switch(action.type) {
    case FETCH_DISTILLERIES_START:
      return {...state, 
      isFetching: true,
      error: ''};
    case FETCH_DISTILLERIES_SUCCESS:
      return {...state, isFetching: false,
      breweries: action.payload};
    case FETCH_DISTILLERIES_FAILURE:
      return {...state, error: action.payload}
    default: return {...state}
  }
}

export default distilleryReducer;