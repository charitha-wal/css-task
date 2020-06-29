import React, { Component } from 'react';
import './carouselCard.scss';

class CarouselCard extends Component{

    render(){
        return(
            <div className="MainCard" style={{backgroundImage:`url(${this.props.data.imageUrl})` , backgroundSize:"100% 100%"}}>
                {/* <img src={this.props.data.imageUrl} style={{width:"100%" , height:"100%"}}/> */}
                <div className="CardTitle">
                    {this.props.data.title}
                </div>
                <div className="CardLabel">
                    {this.props.data.label}
                </div>
                <div className="CardDescription">
                    {this.props.data.description}
                </div>
            </div>
        )
    }
}

export default CarouselCard;