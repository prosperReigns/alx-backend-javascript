function getPaymentTokenFromAPI(success) {
  if (success === true) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
  return Promise.resolve();
}

module.exports = getPaymentTokenFromAPI;
