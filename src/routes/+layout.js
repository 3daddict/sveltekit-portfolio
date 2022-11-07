export async function load() {
  const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  let data = [];
  let rawData = await response.json();

  data.push({ 
    currency: "USD", 
    symbol: "$", 
    rate: rawData.bpi.USD.rate 
  });

  return {
    data
  };
}