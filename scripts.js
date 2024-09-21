document.addEventListener('DOMContentLoaded', function() {
    const btcPriceElement = document.getElementById('btc-price');
    const ethPriceElement = document.getElementById('eth-price');
    
    async function fetchCoinPrices() {
        try {
            const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
            const data = await response.json();
            const btcPrice = data.bitcoin.usd;
            const ethPrice = data.ethereum.usd;
            btcPriceElement.textContent = `$${btcPrice.toLocaleString()}`;
            ethPriceElement.textContent = `$${ethPrice.toLocaleString()}`;
        } catch (error) {
            console.error('Error fetching coin prices:', error);
        }
    }

    // Fetch the initial prices
    fetchCoinPrices();

    // Update the prices every 10 seconds
    setInterval(fetchCoinPrices, 10000);
});
