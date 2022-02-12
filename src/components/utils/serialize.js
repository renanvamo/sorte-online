const serializePrice = (num) => {
  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(num);
  return currency;
}

export default serializePrice;
