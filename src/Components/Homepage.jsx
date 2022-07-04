import React from 'react'
import millify from 'millify'    /* ayuda a numros mas leibles*/
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

import {useGetCryptosQuery} from '../services/cryptoApi'
import {Cryptocurrencies, News} from '../Components'

const {Title} = Typography

const Homepage = () => {
  const{data, isFetching} =useGetCryptosQuery();
  const globalStats=data?.data?.stats;

  if(isFetching) return 'Loading...'
  
  return (
    <>
      <Title level={2} className="heading"> Global Crypto Stats</Title>
      <Title level={5} className="sub-heading">CryptoDash by Martín</Title>
      <br/>
      <Row>
        <Col span={12} ><Statistic title="Total Cryptocurrencies" value={globalStats?.totalCoins} /></Col>   {/* tomará 12 espacio y ant desgin tiene 24; toma la mitad*/}
        <Col span={12} ><Statistic title="Total Exchanges" value={millify(globalStats?.totalExchanges)} /></Col>
        <Col span={12} ><Statistic title="Total Market Cap" value={millify(globalStats?.totalMarketCap)} /></Col>
        <Col span={12} ><Statistic title="Total 24h Volume" value={millify(globalStats?.total24hVolume)}/></Col>
        <Col span={12} ><Statistic title="Total Markets" value={millify(globalStats?.totalMarkets)} /></Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className="home-title">Top 10 Cryptocurrencies</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className='home-heading-container'>
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
      </div>
      <News simplified />

    </>
  )
}

export default Homepage
