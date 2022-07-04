import React, {useState} from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card,Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';


const Cryptocurrencies = () => {
  const count="prueba"
  const {data: cryptosList, isFetching} = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)

  console.log(cryptos)

  return (
    <>
      <Row gutter={[32,32]} className="crypto-card-container">
        {cryptos.map((currency) =>(
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
