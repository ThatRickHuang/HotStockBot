//This function uses the polygon.io api to get the open, close, high, and low prices of a stock at anytime (historical)
export const fetchStockPrice = async (ticker, year, month, day) => {
  try {
    const response = await fetch(
      `https://api.polygon.io/v1/open-close/${ticker}/${year}-${month}-${day}?adjusted=true&apiKey=${process.env.POLY_API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};

//this function uses the FMP api to get current price and name of company
export const fetchStockName = async (ticker) => {
  try {
    const response = await fetch(
      `https://financialmodelingprep.com/api/v3/quote/${ticker}?apikey=${process.env.FMP_API_KEY}`
    );
    const data = await response.json();
    const stock = data.find((stock) => stock.symbol === ticker);
    //if stock is found then return the stock
    if (stock) {
      return stock;
    } else {
      // Return an error message or handle the case where the stock is not found
      return `Stock with ticker symbol ${ticker} not found.`;
    }
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};
