const formatCurrencyToIDR = (currency) => {
  return `Rp ${currency.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

export {
  formatCurrencyToIDR
}
