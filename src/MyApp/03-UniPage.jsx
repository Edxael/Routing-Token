import React from 'react'
import Data from './myDB/moviesDB'

export default class extends React.Component{
    render(){

        const MyMovie = Data.filter((movie) => { return movie.id === this.props.match.params.id }).reduce((x) => { return x })
        console.log(MyMovie)

        return(
            <div>
                <h1>Uni-Page</h1>

                <div><strong>Token ID: </strong>{ this.props.match.params.id }</div>
                <div>The token above was received from the routing</div>
                <div>To access the token: this.props.match.params.id </div>
                <br/>
                <div>Here Im using the token to filter the chosen movie.</div>

                <hr/>

                <div className="UNI-Template-Main-Cont" >
                    
                    <div className="UNI-Img-Container" >
                        <img className="UNI-Pic-Style" src={ MyMovie.pic } alt="No Pic." /> 
                    </div>
                    <br/>

                    <div className="UNI-Movie-Text-Main-Container" >
                        <div><strong>Name: </strong>{ MyMovie.name }</div>
                        <div><strong>Year: </strong>{ MyMovie.year }</div>
                        <div><strong>Description: </strong>{ MyMovie.description }</div>
                    </div>

                </div>

            </div>
        )
    }
}