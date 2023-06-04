function getDefaultPrice(price: number) {
  return price;
}
function getNewUserPrice(price: number) {
  return price - price * 0.2;
}
function getBlackFridayPrice(price: number) {
  return price - price * 0.5;
}
function getPromitionPrice(price: number) {
  return price - price * 0.1 + 50;
}

const typePriceMap = {
  default: (price: number) => getDefaultPrice(price),
  newUser: (price: number) => getNewUserPrice(price),
  blackFriday: (price: number) => getBlackFridayPrice(price),
  promotion: (price: number) => getPromitionPrice(price),
};
type TypePriceTest = keyof typeof typePriceMap;
export const getPrice = (price: number, type: TypePriceTest) => {
  return typePriceMap[type](price);
};

const price = getPrice(200, 'blackFriday');
console.log(price);
