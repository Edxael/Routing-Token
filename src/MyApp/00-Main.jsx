
import React from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import './css/style.css'

import Banner from './img/Banner.jpg'

import Home from './01-Home'
import List from './02-List'
import UniPage from './03-UniPage'
import P404 from './99-P404'


export default class extends React.Component{
    render(){

        return(
            <HashRouter>
                <div className="MainContainer">

                    <div className="BannerFrame" >
                        <img className="BannerImg" src={Banner} alt="movies"/>
                    </div>

                    <div className="menu1">
                        <Link className="menuButton" to="/">HOME</Link>
                        <Link className="menuButton" to="/1">Movies</Link>
                    </div>
            
                    <hr/>

                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/1" component={List}/>
                        <Route path="/:id" component={UniPage} />
                        <Route component={P404}/>
                    </Switch>

                    <br/>
                    <hr/>
                    <div>By: Edmundo</div>
            
                </div>
            </HashRouter>
        )
    }
}