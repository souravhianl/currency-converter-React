import React, { useState } from 'react';
import './App.css'

function App() {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);

  // Add your headers here if needed
  const myHeaders = new Headers();
myHeaders.append("apikey", "fn78gvnLV8LbzfPCXt9sjiohsUXRM4BG");

  const convertCurrency = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders,
    };

    const url = `https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`;

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => {
        setResult(data.result);
      })
      .catch(error => console.log('error', error));
  };

  return (
    <div className="App">
      <div className='container'>
      <h1>Currency Converter</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        {/* List of options */}
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
        {/* Add more currencies as needed */}
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        {/* List of options */}
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        {/* Add more currencies as needed */}
      </select>
      <button onClick={convertCurrency}>Convert</button>
      {result && <p>Converted Amount: {result}</p>}
    </div>
    </div>
  );
}

export default App;
