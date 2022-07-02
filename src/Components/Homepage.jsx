import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

const {Title} = Typography

const Homepage = () => {
  return (
    <>
      <Title level={2} className="heading"> Global Crypto Stats</Title>
      <Title level={5} className="sub-heading">CryptoDash by Martín</Title>
      <Row>
        <Col span={12} ><Statistic title="Total Cryptocurrencies" value="5" /></Col>   {/* tomará 12 espacio y ant desgin tiene 24; toma la mitad*/}
        <Col span={12} ><Statistic title="Total Exchenges" value="5" /></Col>
        <Col span={12} ><Statistic title="Total Market Cap" value="5" /></Col>
        <Col span={12} ><Statistic title="Total 24h Volume" value="5" /></Col>
        <Col span={12} ><Statistic title="Total Markets" value="5" /></Col>
      </Row>
    </>
  )
}

export default Homepage
