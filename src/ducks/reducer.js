const initialState = {
  name: '',
  address: '',
  city: '',
  state: '',
  zip: 0,
  img: '',
  mortgage: 0,
  rent: 0
}

const LOCATION_INFO = 'LOCATION_INFO';
const IMG_INFO = 'IMG_INFO';
const MONEY_INFO = 'MONEY_INFO';
const CLEAR_INFO = 'CLEAR_INFO';

export default function reducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case LOCATION_INFO:
      return { ...state, ...payload };
    case IMG_INFO:
      return { ...state, img: payload };
    case MONEY_INFO:
      return { ...state, ...payload };
    case CLEAR_INFO:
      return payload;
    default:
      return state;
  }
}

export function updateLocation(locationObj) {
  return {
    type: LOCATION_INFO,
    payload: locationObj
  }
}

export function updateImg(imgUrl) {
  return {
    type: IMG_INFO,
    payload: imgUrl
  }
}

export function updateMoney(moneyObj) {
  return {
    type: MONEY_INFO,
    payload: moneyObj
  }
}

export function clear() {
  return {
    type: CLEAR_INFO,
    payload: initialState
  }
}