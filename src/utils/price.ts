const formatPrice = (price: number) => {
  let finalPrice;
  let stringPrice = price.toString().split('.');
  
  if (stringPrice.length > 1) {
    finalPrice = stringPrice[0] + ',' + (
      stringPrice[1].length === 1 ? stringPrice[1] + '0' : stringPrice[1]
    );
  } else {
    finalPrice = stringPrice[0];
  }

  return 'R$ ' + finalPrice;
}

export default formatPrice;