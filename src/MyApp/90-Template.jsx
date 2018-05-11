import React from 'react'
import { Link } from 'react-router-dom'

export default class extends React.Component{
    render(){
        return(
            <div className="Template-Main-Cont" >

                <div className="Img-Container" >
                   <img className="Pic-Style" src={this.props.info.pic} alt="No Pic." /> 
                </div>

                <div className="Movie-Text-Main-Container" >
                    <div><strong>Name: </strong>{this.props.info.name}</div>
                    <div><strong>Year: </strong>{this.props.info.year}</div>
                    <br/>

                    <Link className="Link-Button" to={`/${this.props.info.id}`}>More Info</Link>
                </div>

            </div>
        )
    }
}