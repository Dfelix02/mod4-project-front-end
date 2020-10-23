import React from "react";

class Card extends React.Component {
    state = {  }
    render() { 
        return ( 
            <img className="card_image"height="400px" src={this.props.img} alt="" />
        );
    }
}

export default Card;