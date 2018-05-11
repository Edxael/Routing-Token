import React from 'react'
import Data from './myDB/moviesDB'

import Template from './90-Template'

export default class extends React.Component{
    render(){
        console.log("DataBase: ", Data)
        return(
            <div>
                <h1>Movies List</h1>

                <p>Go to the browser console in the developer tools, there you will be able to see the Fake DataBase that we are getting from a locally hosted "movesDB.js" file.</p>

                <hr/>

                { Data.map((movie) => { return <Template key={movie.id} info={movie} /> }) }

            </div>
        )
    }
}