import produceData from '../mockData/produce.json';

const POPULATE = 'produce/populateProduce';
const LIKE_UNLIKE = 'produce/likeUnlikeProduct';

export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData
  }
}

export const likeUnlikeProduct = (productId) => {
  return {
    type: LIKE_UNLIKE,
    productId
  }
}

export const getAllProduce = state => Object.values(state.produce);

export default function produceReducer (state = {}, action) {
  const id = action.productId;
  const nextState = {...state};

  switch (action.type) {
    case POPULATE:
      action.produce.forEach(product => {
        nextState[product.id] = product
      });
      return nextState;

    case LIKE_UNLIKE:
      nextState[id].liked = !nextState[id].liked;
      return nextState;

    default:
      return state;
  }
}