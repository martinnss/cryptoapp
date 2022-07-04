import React, {useState, useEffect} from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card,Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';


const Cryptocurrencies = ({simplified}) => {
  const count= simplified ? 10:100;  /* como pusimos simplified en homepage, debemos pasarlo acá */ 
  const {data: cryptosList, isFetching} = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(()=>{
    setCryptos(cryptosList?.data?.coins)                  /* se ejecutará cuando cualquiera de los valoresn en [] cambien*/
    const filteredData= cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
    setCryptos(filteredData);
  },[cryptosList,searchTerm])   /* nos permite filtrar por el coin que estamos buscando*/

  if(isFetching) return 'Loading...'

  return (
    <>
    <div className='search-crypto'>
      <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)}/>
    </div>
      <Row gutter={[32,32]} className="crypto-card-container">
        {cryptos?.map((currency) =>(
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>                                                  {/* xs: xsmall dvices (1 por col); sm: small devices (2 por col)*/}
            <Link to={`/crypto/${currency.id}`}>
              <Card 
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className='crypto-image' src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)} USD</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies
