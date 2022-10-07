import { useState, useEffect } from 'react'
import Header from './components/Header';
import Historial from './components/Historial'
import axios from 'axios';

function App() {
  const [cryptos, setCryptos] = useState({});
  const [crypto, setCrypto] = useState('');
  const [counter, setCounter] = useState(10);



  useEffect( () => {    
    const fetchHistorico = async() => {
      const url = "http://localhost:8000";
      const response = await axios.get(`${url}/cryptos`);      
      const result = response.data;
      setCryptos(result);      
      
    }
    fetchHistorico();
  },[setCryptos]);


  useEffect( () => {
    const interval = setInterval(() => {  
      setCounter(counter => counter-1);
    }, 1000);
      return () => clearInterval(interval);
      
    
  })

  useEffect(() => {
    getData();
    if (counter === 0) {
      console.log("Envio una request...");
      getData();
      setCounter(10);
    }
  });

  const getData = () => {
    const setData = async() => {
          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD`;
          const res = await axios.get(url);       
          const crypto = res.data.DISPLAY.BTC.USD;
         setCrypto(crypto.PRICE);
        //  saveHistory();
      
    }
    setData();

    const saveHistory = async() => {
      const storeUrl = "https://localhost:8000";
      const result = await axios.post(`${storeUrl}/store`,{
        name: crypto.FROMSYMBOL,
        price: crypto.PRICE ,
        open_day: crypto.OPENDAY,
        low_day: crypto.LOWDAY
      });

      console.log("resultado store: ", result)
    }
  }
  

  return (
    <div className="container">
      <Header crypto={crypto} counter={counter} />
      <Historial cryptos={cryptos}/>
	</div>
  )
}

export default App
