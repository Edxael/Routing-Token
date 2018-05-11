import React from 'react'
import Token from './img/token.png'


export default class extends React.Component{
    render(){
        console.clear()
        return(
            <div>
                <h1>Routing passing a TOKEN</h1>

                <img src={Token} alt="Moneda"/>

                <p>This page is to show how to route to a new page passing a token. </p>
                <p>To make this example simple I will be using a "JavaScript" file locally hosted where you can find an Object with the information for each movie, this will simulate a DataBase, I don't use a real database because I want to focus on passing the token, not in queries or calls to an API. </p>
                <p>Next page has a list of Movies, each has a ID, when click on More-Info you will be routed to a new page where you can access the ID provided in the props. </p>
                <p>once you have the ID, you can do a query to the database to populate the data for this object. </p>

                <div></div>
            </div>
        )
    }
}