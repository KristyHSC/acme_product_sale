import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Products from './Products'
import Create from './Create'


export default class Main extends React.Component{
    render(){
        return (
            <HashRouter>
                <div id='main'>
                    <div className = 'column container'>
                        <div id='header'>
                            <h1>Acme Products/Sales</h1>
                        </div>
                    </div>
                    <Navbar />
                </div>
                <Route exact path='/api/' component = {Home} />
                <Route exact path='/api/products' component = {Products} />
                <Route exact path='/api/products/create' component ={Create} />
            </HashRouter>
        )
    }
}

