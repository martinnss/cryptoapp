import React from 'react'
import {Switch, Route, Link,} from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import './App.css'
import {Navbar, Exchenges, Homepage, Cryptocurrencies, News, CryptoDetails} from './Components';

const App = () => {
  return (
    <div className='app'>
        <div className='navbar'> 
            <Navbar />
        </div> 
        <div className='main'>
            <Layout>
                <div className='routes'>
                    <Switch>                     {/* switch te deja tener multiples Routes */}
                        <Route exact path="/">
                            <Homepage />
                        </Route>
                        <Route exact path="/exchenges">
                            <Exchenges />
                        </Route>
                        <Route exact path="/cryptocurrencies">
                            <Cryptocurrencies />
                        </Route>
                        <Route exact path="/crypto/:coinId">  {/* los dos puntos nos indica que coinId va a ser dinamico */}
                            <CryptoDetails />
                        </Route>
                        <Route exact path="/news">
                            <News />
                        </Route>
                    </Switch>
                </div>
            </Layout>
        </div>
        <div className='footer'>
            <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
                CryptoDash <br />
                All rights reserved
            </Typography.Title>
            <Space>
                <Link to="/">Home</Link>
                <Link to='/exchenges'>Exchenges</Link>
                <Link to='/news
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                '>News</Link>
            </Space>
        </div>
    </div>
  )
}

export default App