const formatMoney = number => {
  if (typeof number !== "number" || isNaN(number)) {
    return "x";
  }
  return number < 0 ? `-$${(number * -1).toFixed(2)}` : `$${number.toFixed(2)}`;
};

export default formatMoney;
